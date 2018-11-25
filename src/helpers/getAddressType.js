import validator from 'wallet-address-validator'
import * as symbols from './symbols'

/**
 * returns the symbol of the given address type
 * address symbols are stored in helpers/symbols
 * @param address {string}
 */
export const getAddressType = (address = '') => {
    if (validator.validate(address, symbols.NEO)) {
        return symbols.NEO
    }
    if (validator.validate(address, symbols.ETH)) {
        return symbols.ETH
    }
    if (validator.validate(address, symbols.QTUM)) {
        return symbols.QTUM
    }
    return ''
};
