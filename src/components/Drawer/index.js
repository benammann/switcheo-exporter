import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Hidden from '@material-ui/core/Hidden';

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import { toggleNetwork } from "../../actions/switcheo/toggleNetwork";
import { mainNet } from "../../reducers/switcheo/networkReducer";

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
    },
    pageTitle: {
        flex: 1,
    },
    content: {
        padding: 10
    }
});

class Header extends Component {

    navigateHome = () => {
        this.props.history.push("/")
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="default" className={this.props.classes.appBar}>
                    <Toolbar>
                        <div>
                            <IconButton onClick={this.navigateHome}>
                                <ArrowBackIcon/>
                            </IconButton>
                        </div>
                        <Hidden xsDown>
                            <Typography variant="h6" noWrap>
                                {this.props.address.address}
                            </Typography>
                        </Hidden>
                        <div className={this.props.classes.pageTitle} />
                        <FormGroup row>
                            <FormControlLabel control={<Switch color={"primary"} onChange={this.props.toggleNetwork} disabled={this.props.layout.loading} checked={this.props.switcheo.network === mainNet ? true : false} />} label={this.props.switcheo.network === mainNet ? "MainNet" : "TestNet"}/>
                        </FormGroup>

                    </Toolbar>
                </AppBar>
                <div className={this.props.classes.content}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleNetwork
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header)));
