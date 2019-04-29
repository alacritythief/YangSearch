import React from 'react';

class SearchButton extends React.Component {
  render () {
    return(
      <button onClick={this.props.callback}>{this.props.text}</button>
    )
  }
}

export default SearchButton;

