import update from 'immutability-helper'

import {
    ADDRESS_SET,
    ADDRESS_RESET,
    ADDRESS_FETCH_ORDERS,
} from '../../actions/address/actions'

const initialState = {
    address: '',
    addressHashed: '',
    addressType: '',
    orders: []
};

/**
 * This reducer handles the current address
 * @param address
 * @param action
 * @returns {*}
 */
export default (address = initialState, action) => {
    switch (action.type) {
        case ADDRESS_SET:
            return {
                address: action.address,
                addressHashed: action.addressHashed,
                addressType: action.addressType,
                orders: []
            };
        case ADDRESS_RESET:
            return initialState;
        case ADDRESS_FETCH_ORDERS:
            return update(address, {
                orders: {
                    $set: action.orders,
                },
            });
        default:
            return address
    }
}
