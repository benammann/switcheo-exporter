import {getAddressType} from "./getAddressType";

/**
 * Checks if the given Address is valid
 * @param address {string}
 * @returns {boolean}
 */
export const isAddressValid = (address = '') => {
    return getAddressType(address) !== ''
};
