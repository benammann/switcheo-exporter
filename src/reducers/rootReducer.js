import { combineReducers } from 'redux';

import switcheoReducer from './switcheo/switcheoReducer'
import layoutReducer from './layout/layoutReducer'

export default combineReducers({
    switcheo: switcheoReducer,
    layout: layoutReducer,
})
