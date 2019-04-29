import React from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer
} from '../../ui-components/containers';
import SearchInput from '../../components/SearchInput';
import PolicyResults from '../../components/PolicyResults';
import { policySearch } from '../../lib/policysearch';
import { SearchButton } from '../../ui-components/SearchButton';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchValue: '',
      policyResults: []
    }
  }

  updateSearchValue = (value) => {
    this.setState({
      searchValue: value
    })
  }

  getPolicyResults = (value) => {
    let results = policySearch(value);
    this.setState({
      policyResults: results
    })
  }

  getSearchCallback = (value) => {
    this.setState({
      searchValue: value
    });
    this.getPolicyResults(value);
  }

  render () {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <ContentContainer>
            <h1>Yang2020 Search</h1>
            <h3>Search Andrew Yang's polices</h3>
            <SearchInput
              updateSearchValue={this.updateSearchValue} 
              callback={this.getSearchCallback}
            />
            <SearchButton>Search</SearchButton>
            { this.state.searchValue !== '' ? <h2>Policy results for "{this.state.searchValue}":</h2> : null }
            { this.state.policyResults.length < 1 ? <p>No results found :(</p> : <PolicyResults policies={this.state.policyResults} />}
          </ContentContainer>
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
