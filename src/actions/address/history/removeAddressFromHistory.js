import {ADDRESS_REMOVE_FROM_HISTORY} from "../actions";
import cookie from 'react-cookies'

/**
 * Removes $address from address history
 * @param address
 * @returns {Function}
 */
export const removeAddressFromHistory = (address) => dispatch => {

    let newHistory = (cookie.load("address/history") || []).filter(addr => addr !== address);
    cookie.save("address/history", newHistory);

    dispatch({
        type: ADDRESS_REMOVE_FROM_HISTORY,
        history:  newHistory
    });
};