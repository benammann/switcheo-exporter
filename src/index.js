import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import {history, store} from './store';

import ErrorProvider from './components/ErrorProvider'

import HomePage from './pages/form'
import TradesPage from './pages/address'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {darkTheme} from './config/theme'

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <MuiThemeProvider theme={darkTheme}>
            <Switch>
                <ErrorProvider>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route path={"/address/:address"} component={TradesPage}/>
                </ErrorProvider>
            </Switch>
        </MuiThemeProvider>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
