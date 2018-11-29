import { LAYOUT_HIDE_ERROR } from "../actions";

/**
 * Hides the displayed error message
 * @returns {function(*): *}
 */
export const hideError = () => dispatch => {
    return dispatch({
        type: LAYOUT_HIDE_ERROR,
    })
};
