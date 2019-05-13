import React, { Component } from "react";
import "./styles/App.css";
import Player from "./components/Player";
import "video-react/dist/video-react.css";
// import Menu from "./components/Menu";
import Drawer from "./components/Drawer";
import axios from "axios";

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
       src: { name: "شبکه یک", address: "http://172.16.16.163:8000/tv1.m3u8" }

      // src: { name: "موزاییک", address: "http://172.16.16.195:8000/mosaic.m3u8" }
      // src: { name: "تست ۲", address: "http://192.168.1.10:8000/test2.m3u8" }
      // src: {name: "تست ۲",address:'http://192.168.0.116:8000/test2.m3u8'}
      // src: 'http://172.16.16.153:8000/tv1.m3u8'
      // src:""
    };
  }

  callApi = async (path, payload) => {
    const response = await axios({
      method: "post",
      url: global.serverAddress + "/streams/client/" + path,
      // headers: { "x-access-token": localStorage.getItem("token") },
      data: payload
    });
    if (response.status !== 200) throw Error(response.message);
    return response;
  };

  componentWillMount() {
    this.fillComponent();
  }

  setSrc(src) {
    this.setState({ src: src }, () => {
      this.fillComponent();
    });
  }
  fillComponent() {
    var localComponent = [];
    this.callApi("all", "").then(res => {
      var channels = res.data.streams;
      console.log("channels:",channels)
      
      localComponent.push(
        <Player key={this.state.src.name} src={this.state.src.address} />
      );
      this.setState({ localComponent,channels },()=>{});
    });
  }

  render() {
    
    return (
      <div>
        <Drawer
          id="myDrawer"
          items={this.state.channels}
          selectedSrc={this.setSrc.bind(this)}
          selectedName={this.state.src.name}
          elements={this.state.localComponent}
        />
      </div>
    );
  }
}

export default PlayerPage;
