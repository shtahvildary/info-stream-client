import React, { Component } from 'react';
import './styles/App.css';
// import InfoPlayer from './PlayerPage'
import ArchivePlayer from './ArchivePlayer'
import "./styles/scss/video-react.scss"
// global.serverAddress = "http://localhost:5000/api";
global.serverAddress = "http://172.16.16.164:5000/api";

class App extends Component {
  render() {
    return (
      <div className="App" dir='rtl'>
        <ArchivePlayer/>
        {/* <InfoPlayer/> */}
      </div>
    );
  }
}


export default App;
