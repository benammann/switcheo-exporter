import { SWITCHEO_TOGGLE_NETWORK } from "../actions";

import { fetchContracts } from '../contracts/fetchContracts'
import { fetchTokens } from '../tokens/fetchTokens'

import { setAddress } from "../../address/address/setAddress";
import { raiseError } from "../../layout/errors/raiseError";
import { mainNet} from "../../../reducers/switcheo/networkReducer";

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
        /**
         * TODO: implement raiseNotification
         */
        dispatch(raiseError(`switched to ${getState().switcheo.network === mainNet ? "MainNet" : "TestNet"}`));
    }
};
