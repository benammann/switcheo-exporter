import {SWITCHEO_FETCH_TICKERS} from "../../actions/switcheo/actions";

/**
 * This reducer handles the tickers delivered by api.switcheo.exchange
 * @param tickers
 * @param action
 */
export default (tickers = {}, action) => {
    switch (action.type) {
        case SWITCHEO_FETCH_TICKERS:
            return action.tickers;
        default:
            return tickers;
    }
}