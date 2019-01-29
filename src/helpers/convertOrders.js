import * as symbols from './symbols'
import {wallet} from '@cityofzion/neon-js'
import moment from 'moment'

/**
 * Converts orders to a readable format
 * @param orders
 * @param tokens
 * @param contracts
 * @param tickers
 * @returns {Array}
 */
export const convertOrders = (orders, tokens, contracts, tickers) => {
    let convertedOrders = [];

    for (const order of orders) {
        //fam = "Fills and Makes"
        let fills = order.fills;
        let makes = order.makes;

        for (const index of fills.keys()) {
            fills[index].is_make = false;
        }

        for (const index of makes.keys()) {
            makes[index].is_make = true;
        }

        const fams = [].concat.apply([], [fills, makes]);

        //fam = "Fill and Make"
        for (const fam of fams) {

            if (!order.blockchain) {
                continue
            }

            const blockchain = order.blockchain.toUpperCase();

            if (blockchain === symbols.NEO || blockchain === symbols.ETH || blockchain === symbols.QTUM) {

                const addressHash = order.address;
                const contractHash = order.contract_hash;
                const {pair, side} = order;
                const {created_at, price, fill_amount, want_amount, fee_amount, fee_asset_id, status} = fam;

                //Parse the orderDate
                const parsedDate = new Date(Date.parse(created_at));

                const orderDate = moment(parsedDate).format("YYYY-MM-DD HH:mm:ss");

                //Format the contract hash to a readable address
                //TODO: Implement check for QTUM when switcheo implements it
                //ETH is fine
                const address = blockchain === symbols.NEO ? wallet.getAddressFromScriptHash(addressHash) : addressHash;

                //Detect the contract version
                const contractVersion = Object.keys(contracts[blockchain]).find(key => contracts[blockchain][key] === contractHash);

                //Reformat the pair
                const market = pair.replace("_", "/");

                //Upper case the orderType
                const orderType = side.toUpperCase();

                //Parse order price
                const orderPrice = parseFloat(price).toFixed(8);

                // Split pair
                const splittedPair = pair.split("_");

                /**
                 * Format given amount back to original amount
                 */

                const towardTokenSymbol = splittedPair[0];
                const towardToken = tokens[towardTokenSymbol];
                // use 8 as default precision in case the token is not listed anymore
                const decimals = towardToken === undefined ? 8 : tokens[splittedPair[0].toUpperCase()].decimals;
                //const amount = parseFloat(side === "BUY" ? fill_amount : want_amount) / Math.pow(10, decimals);

                let amount = 0.0;
                if(status === "cancelled") {
                    /**
                     * Since order has been cancelled, the fill amount is undefined
                     * We must calculate the token amount then
                     */
                    const total = amount = parseFloat(want_amount) / Math.pow(10, decimals);
                    amount = total / price;
                } else {
                    /**
                     * Order has been filled
                     * -> just parse the fill amount
                     */
                    amount = parseFloat(fill_amount) / Math.pow(10, decimals);
                }

                let fee_symbol = '-';
                let feePaid = 0.0;

                //detect current price
                const currentPrice = tickers && tickers[splittedPair[0]] && tickers[splittedPair[0]][splittedPair[1]] ? tickers[splittedPair[0]][splittedPair[1]] : '?';

                //calculate gains
                let gains = currentPrice !== '?' ? (((parseFloat(currentPrice).toFixed(8) / orderPrice) * 100 - 100)).toFixed(2) : '?';

                if (orderType === 'SELL' && gains > 0) {
                    gains = gains * -1;
                }

                gains = `${gains}%`;
                /**
                 * Makes are free
                 */
                if (!fam.is_make) {
                    fee_symbol = Object.keys(tokens).find(symbol => tokens[symbol].hash === fee_asset_id);
                    if (fee_symbol) {
                        const fee_token_precision = tokens[fee_symbol].decimals;
                        feePaid = parseFloat(fee_amount) / Math.pow(10, fee_token_precision);
                    } else {
                        /**
                         * Use toward token as fee symbol
                         * and 8 as default precision
                         */
                        fee_symbol = towardTokenSymbol;
                        feePaid = parseFloat(fee_amount) / Math.pow(10, 8);
                    }

                }

                // Calculate total amount
                const total = Number(parseFloat(orderPrice * amount)).toFixed(8);

                convertedOrders.push([
                    orderDate,
                    address,
                    blockchain,
                    contractVersion,
                    market,
                    orderType,
                    amount,
                    orderPrice,
                    currentPrice,
                    gains,
                    fee_symbol,
                    feePaid,
                    total,
                    status
                ]);

            } else {
                //invalid blockchain type
            }

        }

    }

    return convertedOrders;
};
