import * as symbols from './symbols'
import { getAddressType } from "./getAddressType";
import { wallet } from '@cityofzion/neon-js'

/**
 * formatAddress formats an address to a compatible format depending on the given blockchain
 * @param address
 * @returns {string}
 */
export const formatAddress = (address = '') => {

    const addressType = getAddressType(address);

    if(addressType === symbols.NEO) {
        /**
         * For NEO, an address refers to the RIPEMD160 hash of the the user's ECDSA public key.
         */
        return wallet.getScriptHashFromAddress(address);
    } else if(addressType === symbols.QTUM) {
        /**
         * TODO: implement when qtum has been released
         */
        return address.toLowerCase();
    } else if(addressType === symbols.ETH) {
        /**
         * For Ethereum, an addresses refers to the Keccak hash of the right-most 160-bits of the user's ECDSA public key, as specified in the Ethereum Yellow Paper.
         * Ethereum addresses are sometimes displayed with uppercase letters for verification purposes. When submitting addresses through the Switcheo API however, the address should always be fully lowercased.
         */
        return address.toLowerCase();
    } else {
        return address.toLowerCase();
    }
};
