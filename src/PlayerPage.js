import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drawer from './components/Drawer'
import Player from './components/Player';
import HLSSource from './components/HLSSource';
import Menu from './components/Menu'

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [{ name: 'شبکه یک', address: "http://172.16.16.153:8000/tv1.m3u8" }, { name: 'شبکه ورزش', address: "http://172.16.16.153:8000/varzesh.m3u8" }],
      src: 'http://172.16.16.153:8000/tv1.m3u8'
    };
  }

  setSrc(src) {
    console.log('src: ', src.channelsList)
    this.setState({ src: src.channelsList }, () => {  })
  }

  render() {
    console.log("hiiiii", this.state.src)
    return (
      <div>
        <Menu id="channelsList" name="لیست شبکه ها" items={this.state.channels} selectedSrc={this.setSrc.bind(this)} />
        <Player src={this.state.src} />
      </div>
    );
  }
}

export default PlayerPage;
