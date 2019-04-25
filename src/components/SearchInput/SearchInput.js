import React from 'react';

class SearchInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.currentTarget.value
    })
  }

  handleSubmit = (event) => {
    if (event.key === 'Enter' && this.state.value !== "") {
      let lowercaseValue = this.state.value.toLocaleLowerCase()
      this.props.callback(lowercaseValue);
    }
  }

  render () {
    return (
      <React.Fragment>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
};

export default SearchInput;