/**
 *
 * Rule: Each fill or make creates an entry in the csv
 *
 *
 * Date -> fillormake.created_at
 * Address -> neon.fromScriptHash(order.address)
 * Blockchain -> upper(order.blockchain)
 * Contract Version contracts[contract] -> key to upper
 * Market -> order.pair.replace('_', '/')
 * Type -> order.side
 *
 * Price -> fillormake.price
 * Amount  -> fillormake.fill_amount
 * Total -> price * amount
 * Fee Paid -> fillormake.fee_amount
 * Fee Token -> fillormake.tokens[fillormake.fee_asset_id]
 *
 */

import * as symbols from './symbols'
import { wallet } from '@cityofzion/neon-js'

/**
 * Converts orders to a readable format
 * @param orders
 * @param tokens
 * @param contracts
 * @returns {Array}
 */
export const convertOrders = (orders, tokens, contracts) => {
    let convertedOrders = [];

    for(const order of orders) {
        //fam = "Fills and Makes"
        let fills = order.fills;
        let makes = order.makes;

        for(const index of fills.keys()){
            fills[index].is_make = false;
        }

        for(const index of makes.keys()){
            makes[index].is_make = true;
        }

        const fams = [].concat.apply([], [fills, makes]);

        //fam = "Fill and Make"
        for(const fam of fams) {

            const blockchain = order.blockchain.toUpperCase();

            if (blockchain === symbols.NEO || blockchain === symbols.ETH || blockchain === symbols.QTUM) {

                /**
                 *
                 * Rule: Each fill or make creates an entry in the csv
                 *
                 *
                 * Date -> fillormake.created_at
                 * Address -> neon.fromScriptHash(order.address)
                 * Blockchain -> upper(order.blockchain)
                 * Contract Version contracts[contract] -> key to upper
                 * Market -> order.pair.replace('_', '/')
                 * Type -> order.side
                 *
                 * Price -> fillormake.price
                 * Amount  -> fillormake.fill_amount
                 * Total -> price * amount
                 * Fee Paid -> fillormake.fee_amount
                 * Fee Token -> fillormake.tokens[fillormake.fee_asset_id]
                 *
                 */

                const addressHash = order.address;
                const contractHash = order.contract_hash;
                const {pair, side} = order;
                const {created_at, price, fill_amount, want_amount, fee_amount, fee_asset_id, status} = fam;

                //Parse the orderDate
                const orderDate = Date.parse(created_at);

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
                const orderPrice = parseFloat(price);

                /**
                 * Format given amount back to original amount
                 */

                const decimals = tokens[pair.split("_")[0].toUpperCase()].decimals;
                const amount = parseFloat(side === "BUY" ? fill_amount : want_amount) / Math.pow(10, decimals);

                let fee_symbol = '-';
                let feePaid = 0.0;

                /**
                 * Makes are free
                 */
                if(!fam.is_make) {
                    fee_symbol = Object.keys(tokens).find(symbol => tokens[symbol].hash === fee_asset_id);
                    const fee_token_precision = tokens[fee_symbol].decimals;
                    feePaid = parseFloat(fee_amount) / Math.pow(10, fee_token_precision);
                }

                // Calculate total amount
                const total = Number(parseFloat(orderPrice * amount)).toFixed(8);

                convertedOrders.push({
                    date: orderDate,
                    address,
                    contract_version: contractVersion,
                    market,
                    type: orderType,
                    price: orderPrice,
                    fee_token: fee_symbol,
                    fee_paid: feePaid,
                    total,
                })

            } else {
                //Do nothing, ignore order
            }

        }

    }

    return convertedOrders;
};
