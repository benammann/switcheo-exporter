import { LAYOUT_SET_LOADING } from "../actions";

/**
 * Sets the global layout state as loading
 * @returns {function(*): *}
 */
export const setLoading = () => dispatch => {
  return dispatch({
      type: LAYOUT_SET_LOADING
  })
};
