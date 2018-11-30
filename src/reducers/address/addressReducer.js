import {ADDRESS_RESET, ADDRESS_SET} from '../../actions/address/actions'

const initialState = {
    address: '',
    addressHashed: '',
    addressType: ''
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
            };
        case ADDRESS_RESET:
            return initialState;
        default:
            return address
    }
}
