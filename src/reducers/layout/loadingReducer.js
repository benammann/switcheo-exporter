import {
    LAYOUT_SET_LOADING,
    LAYOUT_UNSET_LOADING
} from '../../actions/layout/actions'

/**
 * This state handles the current isLoading state
 * @param loading
 * @param action
 * @returns {boolean}
 */
export default (loading = false, action) => {
    switch(action.type) {
        case LAYOUT_SET_LOADING:
            return true;
        case LAYOUT_UNSET_LOADING:
            return false;
        default:
            return loading;
    }
}
