import { combineReducers } from 'redux';

import contracts from './contractsReducer';
import tokens from './tokensReducer';
import network from './networkReducer';

export default combineReducers({
    contracts,
    tokens,
    network
});
