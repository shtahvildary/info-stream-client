import React, { Component } from "react";
import { Player,ControlBar ,LoadingSpinner} from "video-react";
import HLSSource from "./HLSSource";
import classNames from 'classnames';
import * as browser from 'video-react';

class MyPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    var src = this.props.src;
    console.log("src:",src)
    this.setState({ src }, () => {});
  }
  componentWillReceiveProps(newProps) {
    console.log('newProps.sr: ',newProps.sr)
    if (this.state.src !== newProps.src) {
      this.setState({ src: newProps.src }, () => {
        this.refs.player.load();
      });
    }
  }

  render() {
    // const { fluid } = this.props;
    // console.log(this.refs)
    // const { player } = this.manager.getState();
    // const { paused, hasStarted, waiting, seeking, isFullscreen, userActivity } = player;
    return (
      
      <div
        className={classNames({
          'video-react-controls-enabled': true,
      //     'video-react-has-started': hasStarted,
      //     'video-react-paused': paused,
      //     'video-react-playing': !paused,
      //     'video-react-waiting': waiting,
      //     'video-react-seeking': seeking,
      //     'video-react-fluid': fluid,
      //     'video-react-fullscreen': isFullscreen,
      //     'video-react-user-inactive': !userActivity,
      //     'video-react-user-active': userActivity,
          'video-react-workinghover': !browser.IS_IOS,
        }, 'video-react', this.props.className)}
        // style={this.getStyle()}
      //   ref={(c) => {
      //     this.manager.rootElement = c;
      //   }}
        role="region"
        onTouchStart={this.handleMouseDown}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        tabIndex="-1"
      >
      {/* <div> */}
        <Player fluid={true}  ref="player" playsInline={false} >
        <LoadingSpinner />
        <ControlBar autoHide={true}/>

          <HLSSource
            isVideoChild
            src={this.state.src}
            autoPlay
          />
        </Player>
      </div>
    );
  }
}
export default MyPlayer;
