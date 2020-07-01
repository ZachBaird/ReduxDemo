import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleHello, typedOutMoreThan5 } from '../store/actions/sayHiActions';

class SayHi extends Component {
    toggle = e => {
        e.preventDefault();

        this.props.toggleHello(this.props.sayHi.visible);
    }

    typed = e => {
        const input = document.getElementById('input1');

        if (input.value.length >= 5) {
            this.props.typedOutMoreThan5(this.props.sayHi.visible, input.value);
        }
    }

    render() {
        let message = '';

        if (this.props.sayHi.visible) {
            message = <p>Hello!</p>
        }

        return (
            <div>
                <input id="input1" type="text" onBlur={this.typed} />
                <button onClick={this.toggle}>Click me</button>
                {message}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sayHi: state.sayHi
});

export default connect(mapStateToProps, { toggleHello, typedOutMoreThan5 })(SayHi);