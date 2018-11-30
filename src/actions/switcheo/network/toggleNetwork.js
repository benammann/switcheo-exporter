import { SWITCHEO_TOGGLE_NETWORK } from "../actions";

import { fetchContracts } from '../contracts/fetchContracts'
import { fetchTokens } from '../tokens/fetchTokens'

import { setAddress } from "../../address/address/setAddress";

/**
 * toggles the current network between test-api and prod-api
 * it also fetches tokens and contracts from the given network
 * @returns {function(*): *}
 */
export const toggleNetwork = () => (dispatch, getState) => {
    dispatch(fetchContracts());
    dispatch(fetchTokens());
    dispatch({
        type: SWITCHEO_TOGGLE_NETWORK,
    });
    if(getState().address.address.address) {
        /**
         * In case an address is set, its orders need to reload and rerender
         */
        dispatch(setAddress(getState().address.address.address, true));
    }
};
