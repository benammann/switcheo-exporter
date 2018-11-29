import {ADDRESS_ADD_TO_HISTORY} from "../actions";
import {removeAddressFromHistory} from "./removeAddressFromHistory";

/**
 * Adds $address to the address History
 * @param address
 * @returns {Function}
 */
export const addAddressToHistory = (address = '') => dispatch => {
    dispatch(removeAddressFromHistory(address));

    let currentHistory = localStorage.getItem("address/history");
    if(currentHistory) {
        currentHistory = JSON.parse(currentHistory)
    } else {
        currentHistory = [];
    }

    let newHistory = [address, ...currentHistory];
    localStorage.setItem("address/history", JSON.stringify(newHistory));
    dispatch({
        type: ADDRESS_ADD_TO_HISTORY,
        history: newHistory
    })
};