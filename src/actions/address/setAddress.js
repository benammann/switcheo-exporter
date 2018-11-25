import { ADDRESS_SET } from "./actions";
import { getAddressType } from "../../helpers/getAddressType";
import { formatAddress } from "../../helpers/formatAddress";
import {isAddressValid} from "../../helpers/isAddressValid";

import { history } from "../../store";

import { fetchOrders } from "./fetchOrders";

import { fetchContracts } from "../switcheo/fetchContracts";
import { fetchTokens } from "../switcheo/fetchTokens";
import {LAYOUT_RAISE_ERROR} from "../layout/actions";


/**
 * Sets the address state
 * @param address
 * @param doFetchOrders
 * @returns {function(*): *}
 */
export const setAddress = (address, doFetchOrders = false) => dispatch => {

    if(isAddressValid(address)) {
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
    } else {
        dispatch({
            type: LAYOUT_RAISE_ERROR,
            message: `Please enter a valid NEO, ETH or QTUM address`,
        });
        history.push("/");
    }
};
