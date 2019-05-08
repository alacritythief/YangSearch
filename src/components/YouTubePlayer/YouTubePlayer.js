import React from 'react';
import YouTube from 'react-youtube';
import { directive } from '@babel/types';

class YouTubePlayer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videoId: '87M2HwkZZcw', // this.props.videoId
      seconds: '101', // this.props.second
      player: null
    }
  }

  onReady = (event) => {
    // access to player in all event handlers via event.target
    this.setState({
      player: event.target
    })
    event.target.playVideo();
  }

  changeTime = () => {
    if (this.state.player) {
      console.log('seeking!')
      this.state.player.seekTo(300)
      this.state.player.playVideo();
    }
  }

  render () {
    const opts = {
      width: '560',
      height: '315',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: this.state.seconds
      }
    };

    return (
      <div>
      <YouTube
        videoId={this.state.videoId}
        opts={opts}
        onReady={this.onReady}
      />
      <button onClick={this.changeTime}>Change Time</button>
      </div>
    );
  }
}

export default YouTubePlayer;