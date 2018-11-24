import { SWITCHEO_TOGGLE_NETWORK } from "./actions";

import { fetchContracts } from './fetchContracts'
import { fetchTokens } from './fetchTokens'

/**
 * toggles the current network between test-api and prod-api
 * it also fetches tokens and contracts from the given network
 * @returns {function(*): *}
 */
export const toggleNetwork = () => dispatch => {
    dispatch(fetchContracts());
    dispatch(fetchTokens());
    return dispatch({
        type: SWITCHEO_TOGGLE_NETWORK,
    })
};
