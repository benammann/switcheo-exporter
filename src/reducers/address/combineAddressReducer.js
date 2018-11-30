import {combineReducers} from 'redux'

import address from './addressReducer'
import history from './historyReducer'
import orders from './ordersReducer'

export default combineReducers({
    history,
    orders,
    address,
})