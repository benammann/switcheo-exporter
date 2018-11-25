import { LAYOUT_UNSET_LOADING } from "./actions";

/**
 * Sets the global layout state as not loading
 * @returns {function(*): *}
 */
export const unsetLoading = () => dispatch => {
    return dispatch({
        type: LAYOUT_UNSET_LOADING
    })
};
