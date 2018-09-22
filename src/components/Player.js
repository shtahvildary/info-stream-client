import React ,{ Component }from 'react';
import { Player } from 'video-react';
import HLSSource from './HLSSource';

 
class MyPlayer extends Component {

  constructor(props){
    super(props);
    this.state={
      src: 'http://192.168.1.3:8000/out.m3u8'
      // src: 'http://192.168.0.116:8000/out.m3u8'
      // src:'http://172.16.16.153:8000/tv1.m3u8'
    };
  }
  componentWillMount(){
    var src=this.props.src;
    console.log(src)
    this.setState({src},()=>{
    this.fillComponent()

    })
  }
  componentWillReceiveProps(newProps){
    this.setState({src:newProps.src},()=>{
    // console.log('new source',this.state.src)
    this.fillComponent()

    })
  }
  fillComponent(){
    console.log('new source',this.state.src)

    var localComponent=[]
    localComponent.push(  
    <Player>
      <HLSSource
        isVideoChild
        // src="//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
        src={this.state.src}
        autoPlay
      />
    </Player>)
    this.setState({localComponent},()=>{})

  }
render(){
  console.log('new source',this.state.localComponent)

  return (
    <div>

      {this.state.localComponent}
    </div>
  );
}
};
export default MyPlayer;