import React, { Component } from 'react';
import './App.css';
import { ResumePage } from './screens';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ResumePage />
      </Provider>        
    );
  }
};

export default App;