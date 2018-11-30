import {SWITCHEO_FETCH_TICKERS} from "../actions";
import {LAYOUT_RAISE_ERROR} from "../../layout/actions";

/**
 * Fetches the last price ( tickers ) from /v2/tickers/last_price
 * @returns {Function}
 */
export const fetchTickers = (callback) => (dispatch, getState) => {

    const requestUrl = `https://${getState().switcheo.network}.switcheo.network/v2/tickers/last_price`;

    fetch(requestUrl)
        .then(res => res.json())
        .then((tickers) => {
            dispatch({
                type: SWITCHEO_FETCH_TICKERS,
                tickers
            });
            if (callback) {
                return callback()
            }
        })
        .catch((err) => {
            dispatch({
                type: LAYOUT_RAISE_ERROR,
                message: err.message
            });
            if (callback) {
                return callback()
            }
        })

};