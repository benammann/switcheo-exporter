import React, { Component } from 'react';

import update from 'immutability-helper'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


import { isAddressValid } from "../../helpers/isAddressValid";
import { resetAddress } from "../../actions/address/address/resetAddress";

import { fetchAddressHistory } from "../../actions/address/history/fetchAddressHistory";

import AddressHistory from '../../components/AddressHistory'
import Footer from '../../components/Footer'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '100%',
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    addressHistory: {
        marginTop: theme.spacing.unit * 8,
    },
    errorDialog: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        backgroundColor: 'red'
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    }
});

class HomePage extends Component {

    constructor(...params) {
        super(...params);
        this.state = {
            address: '',
            isValid: false,
        }
    }

    componentDidMount() {
        this.props.fetchAddressHistory();
        this.props.resetAddress();
        document.title = "Switcheo Exporter";
    }

    /**
     * Updates the state's address
     * @param address
     */
    handleAddressChange = (address) => {
        this.setState(update(this.state, {
            address: {
                $set: address
            },
            isValid: {
                $set: isAddressValid(address)
            }
        }));
    };

    /**
     * Navigates to #/address/:address in case the given address is valid
     */
    loadTrades = (event) => {
        event.preventDefault();
        if(this.state.isValid) {
            this.props.history.push(`/address/${this.state.address}`)
        }
    };

    render() {
        return (
            <main className={this.props.classes.main}>
                <CssBaseline />
                <Paper className={this.props.classes.paper}>
                   <img src={"./switcheonetwork_logo.svg"} alt={"Switcheo Network Logo"}/>
                    <Typography component="h1" variant="h6">
                        Trades Exporter
                    </Typography>
                    <div className={this.props.classes.form}>
                        <form onSubmit={this.loadTrades}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="public_address">Public Address</InputLabel>
                                <Input id="public_address" name="public_address" autoFocus onChange={event => this.handleAddressChange(event.target.value)} value={this.state.address}/>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.props.classes.submit}
                                disabled={!this.state.isValid}
                            >
                                Load Trades
                            </Button>
                        </form>
                    </div>
                </Paper>
                <div className={this.props.classes.form}>
                    <AddressHistory onAddressClick={this.handleAddressChange}/>
                </div>
                <Footer />
            </main>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    resetAddress,
    fetchAddressHistory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePage));
