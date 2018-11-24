import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import switcheo from './switcheo/switcheoReducer'
import layout from './layout/layoutReducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    switcheo,
    layout,
});
