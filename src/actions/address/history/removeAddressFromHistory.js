import {ADDRESS_REMOVE_FROM_HISTORY} from "../actions";

/**
 * Removes $address from address history
 * @param address
 * @returns {Function}
 */
export const removeAddressFromHistory = (address) => dispatch => {

    let newHistory = JSON.parse(localStorage.getItem("address/history") || "[]").filter(addr => addr !== address);
    localStorage.setItem("address/history", JSON.stringify(newHistory));

    dispatch({
        type: ADDRESS_REMOVE_FROM_HISTORY,
        history:  newHistory
    });
};