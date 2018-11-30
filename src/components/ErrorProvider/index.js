import React, {Component} from 'react'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {hideError} from "../../actions/layout/errors/hideError";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography'

class ErrorProvider extends Component {

    render() {
        return (
            <div>
                <Dialog open={this.props.layout.error.show} onClose={this.props.hideError}
                        aria-labelledby={"error-dialog"}>
                    <DialogTitle id={"error-dialog"}>Error</DialogTitle>
                    <DialogContent>
                        <Typography component={"b"}>{this.props.layout.error.message}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.hideError} color={"primary"} variant={"outlined"}>Close</Button>
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
