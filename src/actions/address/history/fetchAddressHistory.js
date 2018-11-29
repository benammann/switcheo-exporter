import {ADDRESS_FETCH_HISTORY} from "../actions";

/**
 * Fetches the Address History
 * @returns {Function}
 */
export const fetchAddressHistory = () => dispatch => {
    let addrHistory = JSON.parse(localStorage.getItem("address/history") || []);
    addrHistory = addrHistory.slice(0, 4);

    dispatch({
        type: ADDRESS_FETCH_HISTORY,
        history: addrHistory
    });
};