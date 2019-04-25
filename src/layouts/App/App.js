import React from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer
} from '../../ui-components/containers';
import SearchInput from '../../components/SearchInput';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  getSearch = (value) => {
    this.setState({
      searchValue: value
    })
  }

  render () {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <ContentContainer>
            <h1>Yang2020 Search</h1>
            <SearchInput 
              callback={this.getSearch}
            />
            <p>Current Search Value: {this.state.searchValue}</p>
          </ContentContainer>
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
