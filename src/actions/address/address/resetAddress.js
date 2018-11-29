import { ADDRESS_RESET } from "../actions";

/**
 * Resets the Address state
 * @returns {function(*): *}
 */
export const resetAddress = () => dispatch => {
    return dispatch({
        type: ADDRESS_RESET,
    })
};
