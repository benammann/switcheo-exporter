import {ADDRESS_FETCH_ORDERS} from "../../actions/address/actions";

export default (orders = [], action) => {
    switch (action.type) {
        case ADDRESS_FETCH_ORDERS:
            return action.orders;
        default:
            return orders;
    }
}