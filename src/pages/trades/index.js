import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TradesPage extends Component {
    render() {
        return (
            <div>
                <h3>Trades Made</h3>
                <p>Address: {this.props.match.params.address}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TradesPage);

