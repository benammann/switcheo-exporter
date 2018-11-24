import { SWITCHEO_FETCH_ORDERS } from "./actions";
import { LAYOUT_RAISE_ERROR } from "../layout/actions";
import { formatAddress } from "../../helpers/formatAddress";

export const fetchOrders = (address = '') => (dispatch, getState) => {

    const addressHash = formatAddress(address)
    const requestUrl = `https://${getState().switcheo.network}.switcheo.network/v2/orders`;

    fetch(requestUrl)
        .then(res => res.json())
        .then((orders) => {

        })
        .catch((err) => {
            return dispatch({
                type: LAYOUT_RAISE_ERROR,
                message: err.message
            })
        })

}
