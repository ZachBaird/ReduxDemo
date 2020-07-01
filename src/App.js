import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from './store';
import Counter from './components/Counter';
import SayHi from './components/SayHi';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <p>Hello!</p>
          <Counter />
          <SayHi />
          <Display />
        </div>
      </Provider>
    );
  }
}

export default App;
