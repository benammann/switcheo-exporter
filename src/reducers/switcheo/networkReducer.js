import { SWITCHEO_TOGGLE_NETWORK } from "../../actions/switcheo/actions";

export const mainNet = "api";
export const testNet = "test-api";

/**
 * This reducer handles the current network
 * @param network
 * @param action
 * @returns {string}
 */
export default (network = mainNet, action) => {
    switch (action.type) {
        case SWITCHEO_TOGGLE_NETWORK:
            return network === mainNet ? testNet : mainNet;
        default:
            return network
    }
}
