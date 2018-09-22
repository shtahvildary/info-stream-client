import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import Menu from './components/Menu'

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [{ name: 'شبکه یک', address: "http://192.168.1.3:8000/out.m3u8" }, { name: 'شبکه ورزش', address: "http://192.168.1.3:8000/out2.m3u8" }],
      // channels: [{ name: 'شبکه یک', address: "http://192.168.0.116:8000/out.m3u8" }, { name: 'شبکه ورزش', address: "http://192.168.0.116:8000/out2.m3u8" }],
      // channels: [{ name: 'شبکه یک', address: "http://172.16.16.153:8000/tv1.m3u8" }, { name: 'شبکه ورزش', address: "http://172.16.16.153:8000/varzesh.m3u8" }],
      src: 'http://192.168.1.3:8000/out.m3u8'
      // src: 'http://192.168.0.116:8000/out.m3u8'
      // src: 'http://172.16.16.153:8000/tv1.m3u8'
    };
  }
  componentWillMount(){
    console.log("componentWillMount-src: ", this.state.src)

    this.fillComponent()
  }

  setSrc(src) {
    console.log('src: ', src.channelsList)
    this.setState({ src: src.channelsList }, () => { 
    this.fillComponent()
     })
  }
  fillComponent(){
    var localComponent=[]
    localComponent.push(
      <Player src={this.state.src} />
    )
    this.setState({localComponent})

  }

  render() {
    console.log("hiiiii", this.state.src)
    return (
      <div>
        <Menu id="channelsList" name="لیست شبکه ها" items={this.state.channels} selectedSrc={this.setSrc.bind(this)} />
      {this.state.localComponent}
      </div>
    );
  }
}

export default PlayerPage;
