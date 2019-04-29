import React from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer,
  SearchContainer
} from '../../ui-components/containers';
import SearchInput from '../../components/SearchInput';
import PolicyResults from '../../components/PolicyResults';
import { policySearch } from '../../lib/policysearch';
import { ResetSearchButton } from '../../ui-components/ResetSearchButton';

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

    if (value.length >= 3) {
      this.getPolicyResults(value)
    } else {
      this.setState({
        policyResults: []
      })
    }
  }

  getPolicyResults = (value) => {
    let results = policySearch(value);
    this.setState({
      policyResults: results
    })
  }

  getSearchCallback = () => {
    this.getPolicyResults(this.state.searchValue);
  }

  resetSearch = () => {
    if (this.state.searchValue !== '') {
      this.refs.searchInput.state.value = '';
      this.setState({
        searchValue: '',
        policyResults: []
      })
    }
  }

  render () {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <ContentContainer>
            <h1>Yang2020 Search</h1>
            <h3>Search Andrew Yang's polices</h3>
            <SearchContainer>
              <SearchInput
                ref="searchInput"
                updateSearchValue={this.updateSearchValue} 
                callback={this.getSearchCallback}
              />
              <ResetSearchButton onClick={() => this.resetSearch()}>Reset</ResetSearchButton>
            </SearchContainer>
            <PolicyResults
              searchValue={this.state.searchValue}
              policies={this.state.policyResults} 
            />
          </ContentContainer>
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
