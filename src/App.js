import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoPlayer from './PlayerPage'
import Drawer from './Drawer'

class App extends Component {
  render() {
    return (
      <div className="App">
       
        
        {/* <p className="App-intro">
        
        </p> */}
        <InfoPlayer src="http://192.168.0.116:8000/out.m3u8"/>
      </div>
    );
  }
}

export default App;
