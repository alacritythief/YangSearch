import React from 'react';
import { InputBox } from './styles';

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
    });
    this.props.updateSearchValue(event.currentTarget.value);
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
        <InputBox 
          type="text"
          placeholder="ex. UBI, Medicare for All, Human-Centered Capitalism"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
};

export default SearchInput;