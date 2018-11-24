import { combineReducers } from 'redux';

import contractsReducer from './contractsReducer';
import tokensReducer from './tokensReducer';
import networkReducer from './networkReducer';

export default combineReducers({
    contracts: contractsReducer,
    tokens: tokensReducer,
    network: networkReducer,
});
