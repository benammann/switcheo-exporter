import { SWITCHEO_FETCH_TOKENS } from "../../actions/switcheo/actions";

/**
 * This reducer handles the tokens delivered by switcheo.network
 * @param tokens
 * @param action
 * @returns {tokens|{}}
 */
export default (tokens = {}, action) => {
    switch (action.type) {
        case SWITCHEO_FETCH_TOKENS:
            return action.tokens;
        default:
            return tokens;
    }
}
