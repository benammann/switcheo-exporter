import { LAYOUT_RAISE_ERROR } from './actions'

/**
 * Displays an error message
 * @param message {string}
 * @returns {function(*): *}
 */
export const raiseError = (message = '') => dispatch => {
    return dispatch({
        type: LAYOUT_RAISE_ERROR,
        message,
    })
};
