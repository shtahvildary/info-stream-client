import React, { Component } from 'react';
import './styles/App.css';
import Player from './components/Player';
import Menu from './components/Menu'

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // channels: [{ name: 'شبکه یک', address: "http://192.168.1.3:8000/out.m3u8" }, { name: 'شبکه ورزش', address: "http://192.168.1.3:8000/out2.m3u8" }],
      // channels: [{ name: 'شبکه یک', address: "http://192.168.0.116:8000/out.m3u8" }, { name: 'شبکه ورزش', address: "http://192.168.0.116:8000/out2.m3u8" }],
      channels: [{ name: 'شبکه یک', address: "http://172.16.16.153:8000/tv1.m3u8" }, 
       { name: 'شبکه دو', address: "http://172.16.16.153:8000/tv2.m3u8" }, 
       { name: 'شبکه سه', address: "http://172.16.16.153:8000/tv3.m3u8" }, 
       { name: 'شبکه چهار', address: "http://172.16.16.153:8000/tv4.m3u8" },
       { name: 'شبکه پنج', address: "http://172.16.16.153:8000/tv5.m3u8" },
       { name: 'شبکه آموزش', address: "http://172.16.16.153:8000/amoozesh.m3u8" }, 
       { name: 'شبکه قرآن', address: "http://172.16.16.153:8000/quran.m3u8" }, 
       { name: 'شبکه سلامت', address: "http://172.16.16.153:8000/salamat.m3u8" }, 
       { name: 'شبکه نسیم', address: "http://172.16.16.153:8000/nasim.m3u8" }, 
       { name: 'شبکه مستند HD', address: "http://172.16.16.153:8000/mostanad.m3u8" }, 
       { name: 'شبکه نمایش', address: "http://172.16.16.153:8000/namayesh.m3u8" }, 
       { name: 'شبکه افق', address: "http://172.16.16.153:8000/ofogh.m3u8" }, 
       { name: 'شبکه ورزش', address: "http://172.16.16.153:8000/varzesh.m3u8" }, 
       { name: 'شبکه پویا', address: "http://172.16.16.153:8000/pooya.m3u8" }, 
       { name: 'شبکه تماشا HD', address: "http://172.16.16.153:8000/tamasha.m3u8" }, 
       { name: 'شبکه سه HD', address: "http://172.16.16.153:8000/tv3HD.m3u8" }, 
       { name: 'شبکه امید', address: "http://172.16.16.153:8000/omid.m3u8" }, 
       { name: 'شبکه جام جم', address: "http://172.16.16.153:8000/jam_e_jam.m3u8" }, 
       { name: 'شبکه خبر', address: "http://172.16.16.153:8000/irinn.m3u8" }, 
       { name: 'شبکه ورزش', address: "http://172.16.16.153:8000/varzesh.m3u8" }, 
       { name: 'موزاییک', address: "http://172.16.16.153:8000/mosaic.m3u8" }],
      // src: 'http://192.168.1.3:8000/out.m3u8'
      // src: 'http://192.168.0.116:8000/out.m3u8'
      src: 'http://172.16.16.153:8000/tv1.m3u8'
    };
  }
  componentWillMount() {
    console.log("componentWillMount-src: ", this.state.src)

    this.fillComponent()
  }

  setSrc(src) {
    console.log('src: ', src.channelsList)
    this.setState({ src: src.channelsList }, () => {
      this.fillComponent()
    })
  }
  fillComponent() {
    var localComponent = []
    localComponent.push(
      <Player src={this.state.src} />
    )
    this.setState({ localComponent })

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
