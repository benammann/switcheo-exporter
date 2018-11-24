import { SWITCHEO_FETCH_CONTRACTS } from "../../actions/switcheo/actions";

/**
 * This reducer handles the contracts delivered by switcheo.network
 * @param contracts
 * @param action
 * @returns {contracts|{}}
 */
export default (contracts = {}, action) => {
    switch (action.type) {
        case SWITCHEO_FETCH_CONTRACTS:
            return action.contracts;
        default:
            return contracts
    }
}
