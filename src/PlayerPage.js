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

      //   channels: [{id:1, name: 'شبکه یک', address: "http://172.16.17.159:8000/tv1.m3u8" },
      //   { id:2,name: 'شبکه دو', address: "http://172.16.17.159:8000/tv2.m3u8" },
      //   { id:3,name: 'شبکه سه', address: "http://172.16.17.159:8000/tv3.m3u8" },
      //   { id:4,name: 'شبکه چهار', address: "http://172.16.17.159:8000/tv4.m3u8" },
      //   { id:5,name: 'شبکه پنج', address: "http://172.16.17.159:8000/tv5.m3u8" },
      //   { id:6,name: 'شبکه آموزش', address: "http://172.16.17.159:8000/amoozesh.m3u8" },
      //   { id:7,name: 'شبکه قرآن', address: "http://172.16.17.159:8000/quran.m3u8" },
      //   { id:8,name: 'شبکه سلامت', address: "http://172.16.17.159:8000/salamat.m3u8" },
      //   { id:9,name: 'شبکه نسیم', address: "http://172.16.17.159:8000/nasim.m3u8" },
      //   { id:10,name: 'شبکه مستند HD', address: "http://172.16.17.159:8000/mostanad.m3u8" },
      //   { id:11,name: 'شبکه نمایش', address: "http://172.16.17.159:8000/namayesh.m3u8" },
      //   { id:12,name: 'شبکه افق', address: "http://172.16.17.159:8000/ofogh.m3u8" },
      //   { id:13,name: 'شبکه ورزش', address: "http://172.16.17.159:8000/varzesh.m3u8" },
      //   { id:14,name: 'شبکه پویا', address: "http://172.16.17.159:8000/pooya.m3u8" },
      //   { id:15,name: 'شبکه تماشا HD', address: "http://172.16.17.159:8000/tamasha.m3u8" },
      //   { id:16,name: 'شبکه سه HD', address: "http://172.16.17.159:8000/tv3HD.m3u8" },
      //   { id:17,name: 'شبکه امید', address: "http://172.16.17.159:8000/omid.m3u8" },
      //   { id:18,name: 'شبکه جام جم', address: "http://172.16.17.159:8000/jam_e_jam.m3u8" },
      //   { id:19,name: 'شبکه خبر', address: "http://172.16.17.159:8000/irinn.m3u8" },
      //   { id:20,name: 'شبکه ورزش', address: "http://172.16.17.159:8000/varzesh.m3u8" },
      //   { id:21,name: 'موزاییک', address: "http://172.16.17.159:8000/mosaic.m3u8" },
      //   { id:21,name: 'سیگنال خارجی', address: "http://172.16.17.159:8000/sdi.m3u8" }
      // ],

      //  src: { name: "شبکه یک", address: "http://172.16.17.195:8000/tv1.m3u8" }

      // src: { name: "موزاییک", address: "http://172.16.16.195:8000/mosaic.m3u8" }
      // src: { name: "تست ۲", address: "http://192.168.1.10:8000/test2.m3u8" }
      src: {name: "تست ۲",address:'http://192.168.0.116:8000/test2.m3u8'}
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
