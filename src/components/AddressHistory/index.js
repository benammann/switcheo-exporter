import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { fetchAddressHistory } from "../../actions/address/history/fetchAddressHistory";

import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

class AddressHistory extends Component {

    constructor(...props) {
        super(...props);
        this.state = {open: false}
    }

    onAddressClick = (address) => {
        this.closeDialog();
        if(this.props.onAddressClick) {
            this.props.onAddressClick(address)
        }
    };

    closeDialog = () => {
        this.setState({
            open: false
        })
    };

    renderButton = () => {
        if(this.props.address.history.length) {
            return <Button style={{width: '100%'}} color={"primary"} onClick={() => {this.setState({open: true})}}>Show History</Button>
        }
    };

    removeAll = () => {
        localStorage.removeItem("address/history");
        this.props.fetchAddressHistory();
        this.closeDialog();
    };

    render() {
        return (
            <div>
                {this.renderButton()}
                <Dialog open={this.state.open} onClose={this.closeDialog} aria-labelledby={"addr-history-title"}>
                    <DialogTitle id={"addr-history-title"}>Address History</DialogTitle>
                    <DialogContent>
                        <List>
                            {this.props.address.history.slice(0,5).map((address, index) => {
                                return (
                                    <ListItem key={index} button onClick={() => {this.onAddressClick(address)}}>
                                        <ListItemText>{address}</ListItemText>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.removeAll}>Delete History</Button>
                        <Button onClick={this.closeDialog} color={"primary"} variant={"outlined"}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>

        )
    }
    /*
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
    }*/
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAddressHistory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddressHistory);