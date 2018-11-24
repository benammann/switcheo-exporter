import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleNetwork } from './actions/switcheo/toggleNetwork'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <div>
              <button onClick={this.props.toggleNetwork}>Toggle Network</button>
              <pre>
                  {JSON.stringify(this.props)}
              </pre>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleNetwork,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
