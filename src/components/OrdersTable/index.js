import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import {MuiThemeProvider} from '@material-ui/core/styles'
import {darkTable} from "../../config/theme";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {columns, options} from '../../config/table'

class OrdersTable extends Component {
    render() {
        return (
            <MuiThemeProvider theme={darkTable}>
                <MUIDataTable
                    title={"Trade History"}
                    data={this.props.address.orders || []}
                    columns={columns}
                    options={
                        {
                            ...options,
                            downloadOptions: {
                                filename: `switcheonetwork_${this.props.address.addressType}_${this.props.address.address}`
                            }
                        }
                    }
                />
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable)
