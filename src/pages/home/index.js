import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import update from 'immutability-helper'

class HomePage extends Component {

    constructor(...params) {
        super(...params);
        this.state = {
            address: ''
        }
    }

    setAddress = (value) => {
        this.setState(update(this.state, {
            address: {
                $set: value,
            }
        }))
    };

    navigateToTrades = () => {
        this.props.history.push(`/trades/${this.state.address}`)
    };

    render() {
        return (
            <div>
                <h3>Home Page</h3>
                <form>
                    <input type={"text"} placeholder={"address"} value={this.state.address} onChange={event => this.setAddress(event.target.value)}/>
                    <button onClick={this.navigateToTrades}>list trades</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

