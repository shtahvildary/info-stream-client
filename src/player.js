import React from 'react';
import { Player } from 'video-react';
import HLSSource from './HLSSource';

 
export default (props) => {
  return (
    <Player>
    <HLSSource
      isVideoChild
      // src="//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
      src="http://192.168.0.116:8000/index.m3u8"
      autoPlay
    />
  </Player>
  );
};