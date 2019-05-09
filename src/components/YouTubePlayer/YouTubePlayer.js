import React from 'react';
import YouTube from 'react-youtube';
import { VideoContainer } from '../../ui-components/containers';

class YouTubePlayer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videoId: '87M2HwkZZcw', // this.props.videoId
      start: '101', // this.props.start
      player: null
    }
  }

  onReady = (event) => {
    // access to player in all event handlers via event.target
    this.setState({
      player: event.target
    })
  }

  changeTime = (seconds) => {
    console.log('seeking!')
    this.state.player.seekTo(seconds)
    this.state.player.playVideo();
  }

  render () {
    const opts = {
      width: '560',
      height: '315',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        start: this.state.start
      }
    };

    return (
      <VideoContainer>
        <YouTube
          videoId={this.state.videoId}
          opts={opts}
          onReady={this.onReady}
        />
        <button onClick={ () => this.changeTime(203) }>Change Time</button>
      </VideoContainer>
    );
  }
}

export default YouTubePlayer;