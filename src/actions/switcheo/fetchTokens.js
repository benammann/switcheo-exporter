import { SWITCHEO_FETCH_TOKENS } from './actions'
import { LAYOUT_RAISE_ERROR } from '../layout/actions'

/**
 * fetches all tokens from /api/v2/exchange/tokens
 * @returns {function(*, *): *}
 */
export const fetchTokens = (callback) => (dispatch, getState) => {

        const requestUrl = `https://${getState().switcheo.network}.switcheo.network/v2/exchange/tokens`;

        fetch(requestUrl)
            .then(res => res.json())
            .then((tokens) => {
                dispatch({
                    type: SWITCHEO_FETCH_TOKENS,
                    tokens,
                });
                if(callback) {
                    return callback()
                }
            })
            .catch((err) => {
                dispatch({
                    type: LAYOUT_RAISE_ERROR,
                    message: err.message,
                })
            });

};
