import React from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer
} from '../../ui-components/containers';
import SearchInput from '../../components/SearchInput';
import PolicyResults from '../../components/PolicyResults';
import { policySearch } from '../../lib/policysearch';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchValue: '',
      results: []
    }
  }

  getResults = (keyword) => {
    let policyResults = policySearch(keyword);
    this.setState({
      results: policyResults
    })
  }

  getSearch = (value) => {
    this.setState({
      searchValue: value
    });
    this.getResults(value);
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
            <PolicyResults policies={this.state.results} />
          </ContentContainer>
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
