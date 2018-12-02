import {combineReducers} from 'redux';

import contracts from './contractsReducer';
import tokens from './tokensReducer';
import network from './networkReducer';
import tickers from './tickersReducer';

export default combineReducers({
    contracts,
    tokens,
    network,
    tickers
});
