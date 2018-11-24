import validator from 'wallet-address-validator'

/**
 * Checks if the given Address is valid
 * @param address {string}
 * @returns {boolean}
 */
export const isAddressValid = (address = '') => {
    return (validator.validate(address, 'NEO') || validator.validate(address, 'ETH') || validator.validate(address, 'QTUM')) === true
};
