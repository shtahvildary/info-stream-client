import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drawer from './Drawer'
import { Player } from 'video-react';
import HLSSource from './HLSSource';

class PlayerPage extends Component {
  constructor(props){
    super(props);
    this.state={
      src:''
    };
  }
      componentWillMount(){
        var src=this.props.src;
        this.setState({src},()=>{})
      }
  render() {
    return (
      <div className="App">
        <Drawer/>
        
       

 

    <Player>
    <HLSSource
      isVideoChild
      // src="//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
      src={this.state.src}
      autoPlay
    />
  </Player>
  );
};
      </div>
    );
  }
}

export default PlayerPage;
