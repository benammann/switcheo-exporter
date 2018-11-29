import {ADDRESS_ADD_TO_HISTORY} from "../actions";
import {removeAddressFromHistory} from "./removeAddressFromHistory";

/**
 * Adds $address to the address History
 * @param address
 * @returns {Function}
 */
export const addAddressToHistory = (address = '') => dispatch => {
    dispatch(removeAddressFromHistory(address));
    let newHistory = [address, ...JSON.parse(localStorage.getItem("address/history") || "[]")];
    localStorage.setItem("address/history", JSON.stringify(newHistory));
    dispatch({
        type: ADDRESS_ADD_TO_HISTORY,
        history: newHistory
    })
};