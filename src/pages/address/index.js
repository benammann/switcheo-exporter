import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchContracts} from "../../actions/switcheo/contracts/fetchContracts";
import {fetchTokens} from "../../actions/switcheo/tokens/fetchTokens";
import {setAddress} from "../../actions/address/address/setAddress";
import {raiseError} from "../../actions/layout/errors/raiseError";

import {fetchOrders} from "../../actions/address/orders/fetchOrders";

import Spinner from '../../components/Spinner'

import Drawer from '../../components/Drawer'
import OrdersTable from '../../components/OrdersTable'

class TradesPage extends Component {

    componentDidMount() {
        const address = this.props.match.params.address;
        this.props.setAddress(address, true);
        document.title = `List of trades - ${address}`
    }

    renderOrdersTable = () => {
        return !this.props.layout.loading ? <OrdersTable/> : <Spinner/>
    };

    render() {
        return (
            <Drawer>
                {this.renderOrdersTable()}
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

