import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
import GoogleMap2 from './components/GoogleMap2';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Map/>   */}
       
       <GoogleMap2/>
      </div>
    );
  }
}

export default App;
