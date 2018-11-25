import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

export const history = createBrowserHistory();
export const store = createStore(
    rootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
    ),
);
