import { ADDRESS_SET } from "./actions";
import { getAddressType } from "../../helpers/getAddressType";
import { formatAddress } from "../../helpers/formatAddress";

import { fetchOrders } from "./fetchOrders";

import { fetchContracts } from "../switcheo/fetchContracts";
import { fetchTokens } from "../switcheo/fetchTokens";

/**
 * Sets the address state
 * @param address
 * @param doFetchOrders
 * @returns {function(*): *}
 */
export const setAddress = (address, doFetchOrders = false) => dispatch => {
    dispatch({
        type: ADDRESS_SET,
        address,
        addressHashed: formatAddress(address),
        addressType: getAddressType(address),
    });

    if(doFetchOrders) {

        dispatch(fetchContracts(() => {
            dispatch(fetchTokens(() => {
                dispatch(fetchOrders());
            }));
        }));
    }
};
