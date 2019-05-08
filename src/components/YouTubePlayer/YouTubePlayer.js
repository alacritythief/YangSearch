import React from 'react';
import YouTube from 'react-youtube';

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
      <button onClick={ () => this.changeTime(203) }>Change Time</button>
      </div>
    );
  }
}

export default YouTubePlayer;