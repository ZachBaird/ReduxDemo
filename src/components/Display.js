import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return (
            <div>
                <p>{this.props.counter.counterValue}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})

export default connect(mapStateToProps, null)(Display);