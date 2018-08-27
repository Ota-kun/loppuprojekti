import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Toiletlist from './Components/Toiletlist';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Logged from './Components/Profile';
import Main from './Components/Main';
import MapDrive from './Components/MapDrive';

import Map from './Components/Map';
import CustomNavbar from './Components/Navbar';

// import Etsi from './Components/GoogleMap';
// import { GoogleMap } from 'react-google-maps';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/*Header -- POIS KÄYTÖSTÄ
        <header className="App-header">
        </header>
        */}

        {/*Navbar */}
        <CustomNavbar />

        {/* <Etsi /> */}

        {/* <Map/> */}

        {/*Vaihtuva kontentti*/}
        <center>
        <div>

          <Router>
            <div>
              <Route exact path="/" component={Main} />
              <Route path="/Home" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Wclist" component={Toiletlist} />
              <Route path="/Chat" component={Chat} />
              <Route path="/Login" component={Login} />
              <Route path="/Profile" component={Logged} />
              <Route path="/Signup" component={Signup} />
            </div>
          </Router>

        </div>
        {/*
        <div className="footerClass">
          <hr style={{ marginBottom: '0' }}></hr>
        
          // Footer
          <footer>
            Copyright &copy; 2018 Toilet APP
          </footer>
          <br />
        </div>
        */}
        </center>
      </div>
    );
  }
}

export default App;