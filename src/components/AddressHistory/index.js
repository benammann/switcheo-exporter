import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import Hidden from '@material-ui/core/Hidden'

class AddressHistory extends Component {

    onAddressClick = (address) => {
        if(this.props.onAddressClick) {
            this.props.onAddressClick(address)
        }
    };

    render() {
        if(this.props.address.history.length) {
            return (
                <Paper>
                    <List>
                        {this.props.address.history.map((address, index) => {
                            return (
                                <ListItem button onClick={() => {this.onAddressClick(address)}} key={index}>
                                    <Hidden only={["xs"]}>
                                        <ListItemText primary={address} />
                                    </Hidden>
                                    <Hidden only={["sm", "md", "lg", "xl"]}>
                                        <ListItemText primary={`${address.slice(0, 20)}...`} />
                                    </Hidden>
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddressHistory);