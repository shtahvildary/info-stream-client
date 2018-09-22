import React ,{ Component }from 'react';
import { Player } from 'video-react';
import HLSSource from './HLSSource';

 
class MyPlayer extends Component {

  constructor(props){
    super(props);
    this.state={
      src:'http://172.16.16.153:8000/tv1.m3u8'
    };
  }
  componentWillMount(){
    var src=this.props.src;
    console.log(src)
    this.setState({src},()=>{})
  }
  componentWillReceiveProps(newProps){
    var src=this.props.src;
    // console.log('new source',newProps)
    this.setState({src:newProps.src},()=>{
    // console.log('new source',this.state.src)

    })
  }
render(){
  console.log('new source',this.state.src)

  return (
    <Player>
    <HLSSource
      isVideoChild
      // src="//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
      src={this.state.src}
      autoPlay
    />
  </Player>
  );
}
};
export default MyPlayer;