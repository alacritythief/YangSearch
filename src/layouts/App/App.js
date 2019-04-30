import React from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer,
  SearchContainer,
  WhiteText,
  Logo,
  MathHatContainer
} from '../../ui-components/containers';
import SearchInput from '../../components/SearchInput';
import PolicyResults from '../../components/PolicyResults';
import { ReactComponent as YangSearchLogo } from '../../img/yangsearch_logo.svg';
import MathHat from '../../img/math_hat.png';
import { policySearch, policyCounter } from '../../lib/policysearch';
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

    if (value.length >= 2) {
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
            <Logo><YangSearchLogo /></Logo><MathHatContainer src={MathHat}/>
            <WhiteText>
              <a href="https://www.yang2020.com/" rel="noopener noreferrer" target="_blank">
                Yang2020.com</a> | <a href="https://www.yang2020.com/policies/" rel="noopener noreferrer" target="_blank">
                Full Policy List ({ policyCounter()})</a> | <a href="https://secure.actblue.com/donate/friends-of-andrew-yang" rel="noopener noreferrer" target="_blank">
                Donate $20 Today!</a> | <a href="https://twitter.com/alacritythief" rel="noopener noreferrer" target="_blank">Who created this?</a>
            </WhiteText>
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
