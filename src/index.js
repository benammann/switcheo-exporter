import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';

import HomePage from './pages/home'
import TradesPage from './pages/trades'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {theme} from './theme'

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route exact path={"/"} component={HomePage} />
                <Route path={"/trades/:address"} component={TradesPage} />
            </Switch>
        </MuiThemeProvider>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
