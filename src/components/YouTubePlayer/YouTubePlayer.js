import React from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  _onReady (event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render () {
    const opts = {
      width: '560',
      height: '315',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="87M2HwkZZcw"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}

export default YouTubePlayer;