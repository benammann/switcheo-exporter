import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

class Spinner extends Component {
    render() {
        return (
            <div align="center" style={{
                padding: 100
            }}>
                <CircularProgress/>
            </div>
        )
    }
}

export default Spinner
