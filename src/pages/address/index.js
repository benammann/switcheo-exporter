import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchContracts } from "../../actions/switcheo/fetchContracts";
import { fetchTokens } from "../../actions/switcheo/fetchTokens";
import { setAddress } from "../../actions/address/setAddress";
import { raiseError } from "../../actions/layout/raiseError";

import { fetchOrders } from "../../actions/address/fetchOrders";

import Drawer from '../../components/Drawer'
import OrdersTable from '../../components/OrdersTable'

class TradesPage extends Component {

    componentDidMount() {
        const address = this.props.match.params.address;
        this.props.setAddress(address, true);
        document.title = `List of trades - ${address}`
    }

    render() {
        return (
            <Drawer>
                <OrdersTable />
            </Drawer>
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

