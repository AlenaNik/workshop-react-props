import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import User from './User';
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
        <div>
           <Counter />
           <Counter />
        </div>
    );
  }
}

export default App;