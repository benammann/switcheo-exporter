import {ADDRESS_ADD_TO_HISTORY} from "../actions";

import cookie from 'react-cookies'
import {removeAddressFromHistory} from "./removeAddressFromHistory";

/**
 * Adds $address to the address History
 * @param address
 * @returns {Function}
 */
export const addAddressToHistory = (address = '') => dispatch => {
    dispatch(removeAddressFromHistory(address));
    let newHistory = [address, ...cookie.load("address/history") || []];
    cookie.save("address/history", newHistory, { path: '/' });
    dispatch({
        type: ADDRESS_ADD_TO_HISTORY,
        history: newHistory
    })
};