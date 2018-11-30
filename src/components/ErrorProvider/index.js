import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hideError } from "../../actions/layout/errors/hideError";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ErrorProvider extends Component {

    render() {
        return (
            <div>
            <Dialog
                fullScreen={false}
                open={this.props.layout.error.show}
                onClose={this.props.hideError}
                aria-labelledby="responsive-dialog-title"
                color={"primary"}
            >
                <DialogTitle id="responsive-dialog-title">{"Error"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{this.props.layout.error.message}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.hideError} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
                {this.props.children}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    hideError
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorProvider);
