import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SamplePage extends Component {
    render() {
        return (
            <div>SamplePage</div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SamplePage);

