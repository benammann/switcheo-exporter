import {ADDRESS_FETCH_HISTORY} from "./actions";
import cookie from 'react-cookies';

/**
 * Fetches the Address History
 * @returns {Function}
 */
export const fetchAddressHistory = () => dispatch => {
    dispatch({
        type: ADDRESS_FETCH_HISTORY,
        history: cookie.load("address/history") || []
    });
};