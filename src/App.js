import React, { Component } from 'react';
import './styles/App.css';
import LivePlayer from './LivePage'
// import MyPlayer from './PlayerPage'
import "./styles/scss/video-react.scss"
global.serverAddress = "http://localhost:5000/api";

class App extends Component {
  render() {
    return (
      <div className="App" dir='rtl'>
        <LivePlayer/>
        {/* <MyPlayer/> */}
      </div>
    );
  }
}


export default App;
