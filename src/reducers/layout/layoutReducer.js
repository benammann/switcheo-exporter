import { combineReducers } from 'redux'

import error from './errorReducer'

export default combineReducers({
    error: error,
});
