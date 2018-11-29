import {combineReducers} from 'redux';

import {connectRouter} from 'connected-react-router';

import switcheo from './switcheo/switcheoReducer'
import layout from './layout/layoutReducer'
import address from './address/combineAddressReducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    switcheo,
    layout,
    address,
});
