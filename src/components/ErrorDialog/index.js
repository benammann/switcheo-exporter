import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hideError } from "../../actions/layout/hideError";

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
});

class ErrorDialog extends Component {

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.props.layout.error.show}
                    autoHideDuration={6000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.layout.error.message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={this.props.classes.close}
                            onClick={this.props.hideError}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                {this.props.children}
            </div>
        )
    }
}

ErrorDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    hideError
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ErrorDialog));
