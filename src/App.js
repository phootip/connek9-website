import React, { Component } from 'react';
import './App.css';
import Wave from './models/wave'
import Boat from './models/boat'

class App extends Component {
  render() {
    return (
      <div>
        <Boat/>
        <Wave/>
      </div>
    );
  }
}

export default App;
