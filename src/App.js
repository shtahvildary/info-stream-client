import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoPlayer from './PlayerPage'
import Drawer from './components/Drawer'

class App extends Component {
  render() {
    return (
      <div className="App">
       
        
        {/* <p className="App-intro">
        
        </p> */}
        <InfoPlayer/>
        {/* <InfoPlayer src="http://172.16.16.153:8000/tv1.m3u8"/> */}
        {/* <InfoPlayer src="http://172.16.17.159:8000/out.m3u8"/> */}
      </div>
    );
  }
}

export default App;
