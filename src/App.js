import React, { Component } from 'react';
import './styles/App.css';
import InfoPlayer from './PlayerPage'
import "./styles/scss/video-react.scss"
global.serverAddress = "http://localhost:5000/api";

class App extends Component {
  render() {
    return (
      <div className="App" dir='rtl'>
        <InfoPlayer/>
      </div>
    );
  }
}


export default App;
