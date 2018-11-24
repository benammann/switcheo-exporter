import { combineReducers } from 'redux';

import switcheo from './switcheo/switcheoReducer'
import layout from './layout/layoutReducer'

export default combineReducers({
    switcheo,
    layout,
})
