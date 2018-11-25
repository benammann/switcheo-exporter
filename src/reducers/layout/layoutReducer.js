import { combineReducers } from 'redux'

import error from './errorReducer'
import loading from './loadingReducer'

export default combineReducers({
    error,
    loading
});
