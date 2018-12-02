import {ADDRESS_FETCH_HISTORY} from "../actions";

/**
 * Fetches the Address History
 * @returns {Function}
 */
export const fetchAddressHistory = () => dispatch => {

    let addrHistory = localStorage.getItem("address/history");

    if (addrHistory) {
        addrHistory = JSON.parse(addrHistory);
    } else {
        localStorage.setItem("address/history", "[]");
        addrHistory = [];
    }
    dispatch({
        type: ADDRESS_FETCH_HISTORY,
        history: addrHistory
    });
};