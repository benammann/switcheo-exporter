import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchContracts } from "../../actions/switcheo/fetchContracts";
import { fetchTokens } from "../../actions/switcheo/fetchTokens";
import { setAddress } from "../../actions/address/setAddress";
import { isAddressValid } from "../../helpers/isAddressValid";
import { raiseError } from "../../actions/layout/raiseError";

import { fetchOrders } from "../../actions/address/fetchOrders";

class TradesPage extends Component {

    componentDidMount() {
        this.props.fetchContracts();
        this.props.fetchTokens();

        const address = this.props.match.params.address;
        if(isAddressValid(address)) {
            this.props.setAddress(address)
        } else {
            this.props.raiseError(`Please enter a valid NEO, ETH or QTUM address`);
            this.props.history.push("/")
        }

    }

    render() {
        return (
            <div>
                <h3>Trades Made</h3>
                <p>Address: {this.props.match.params.address}</p>
                <p>{JSON.stringify(this.props.switcheo.contracts)}</p>
                <p>{JSON.stringify(this.props.address.orders)}</p>
                <button onClick={this.props.fetchOrders}>Fetch Orders</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchContracts,
    fetchTokens,
    setAddress,
    raiseError,
    fetchOrders
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TradesPage);

