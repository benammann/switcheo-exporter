import {
    ADDRESS_ADD_TO_HISTORY,
    ADDRESS_FETCH_HISTORY,
    ADDRESS_REMOVE_FROM_HISTORY
} from "../../actions/address/actions";

export default (history = [], action) => {
    switch (action.type) {
        case ADDRESS_FETCH_HISTORY || ADDRESS_REMOVE_FROM_HISTORY || ADDRESS_ADD_TO_HISTORY:
            return action.history;
        default:
            return history;
    }
}