import {LAYOUT_HIDE_ERROR, LAYOUT_RAISE_ERROR} from "../../actions/layout/actions";

/**
 * This reducer handles the error popup
 * @param error
 * @param action
 * @returns {*}
 */
export default (error = {show: false, message: ''}, action) => {
    switch (action.type) {
        case LAYOUT_RAISE_ERROR:
            return {
                show: true,
                message: action.message || 'missing error message in reducer'
            };
        case LAYOUT_HIDE_ERROR:
            return {
                show: false,
                message: ''
            };
        default:
            return error
    }
}
