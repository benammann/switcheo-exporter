import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchContracts } from "../../actions/switcheo/fetchContracts";
import { fetchTokens } from "../../actions/switcheo/fetchTokens";

class TradesPage extends Component {

    componentDidMount() {
        this.props.fetchContracts();
        this.props.fetchTokens();
    }

    render() {
        return (
            <div>
                <h3>Trades Made</h3>
                <p>Address: {this.props.match.params.address}</p>
                <p>{JSON.stringify(this.props.switcheo)}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchContracts,
    fetchTokens
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TradesPage);

