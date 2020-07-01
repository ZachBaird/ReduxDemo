import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../store/actions/counterActions';

class Counter extends Component {

    buttonClicked = e => {
        e.preventDefault();

        this.props.increment(this.props.counter.counterValue);
    }

    deleteClicked = e => {
        e.preventDefault();

        this.props.decrement(this.props.counter.counterValue);
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonClicked}>Increment</button>
                <button onClick={this.deleteClicked}>Decrement</button>
                <p>{this.props.counter.counterValue}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps, { increment, decrement })(Counter);