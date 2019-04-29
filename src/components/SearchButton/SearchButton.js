import React from 'react';

class SearchButton extends React.Component {
  render () {
    return(
      <button>{this.props.text}</button>
      // <button onClick={() => this.getPolicyResults(this.state.searchValue)}>Search</button>
    )
  }
}

export default SearchButton;

