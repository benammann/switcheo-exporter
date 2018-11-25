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

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
    },
    backButton: {
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
                        <div className={this.props.classes.backButton}>
                            <IconButton onClick={this.navigateHome}>
                                <ArrowBackIcon/>
                            </IconButton>
                        </div>
                        <Typography variant="h6" noWrap>
                            Switcheo Exporter v2
                        </Typography>
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

}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header)));
