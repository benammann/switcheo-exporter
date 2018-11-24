import { SWITCHEO_FETCH_TOKENS } from './actions'
import { LAYOUT_RAISE_ERROR } from '../layout/actions'

/**
 * fetches all tokens from /api/v2/exchange/tokens
 * @returns {function(*, *): *}
 */
export const fetchTokens = () => (dispatch, getState) => {

    const requestUrl = `https://${getState().switcheo.network}.switcheo.network/v2/exchange/tokens`;

    fetch(requestUrl)
        .then(res => res.json())
        .then((tokens) => {
            return dispatch({
                type: SWITCHEO_FETCH_TOKENS,
                tokens,
            })
        })
        .catch((err) => {
            return dispatch({
                type: LAYOUT_RAISE_ERROR,
                message: err.message,
            })
        });

};
