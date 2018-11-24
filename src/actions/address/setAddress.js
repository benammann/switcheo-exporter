import { ADDRESS_SET } from "./actions";
import { getAddressType } from "../../helpers/getAddressType";
import { formatAddress } from "../../helpers/formatAddress";

/**
 * Sets the address state
 * @param address
 * @returns {function(*): *}
 */
export const setAddress = (address) => dispatch => {
    return dispatch({
        type: ADDRESS_SET,
        address,
        addressHashed: formatAddress(address),
        addressType: getAddressType(address),
    })
};
