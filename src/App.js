import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
import Etsi from './components/GoogleMap';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Map/>   */}
       
       <Etsi/>
      </div>
    );
  }
}

export default App;
