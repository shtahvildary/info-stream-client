import React, { Component } from 'react';
import './App.css';
import InfoPlayer from './PlayerPage'
import "./styles/scss/video-react.scss"

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoPlayer/>
      </div>
    );
  }
}


export default App;
