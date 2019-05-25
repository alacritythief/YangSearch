import React from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer,
  SearchContainer,
  MenuWrapper,
  LogoWrapper,
  MenuText,
  Logo
} from '../../ui-components/containers';
import YouTubePlayer from '../../components/YouTubePlayer';
import SearchInput from '../../components/SearchInput';
import PolicyResults from '../../components/PolicyResults';
import YangSearchLogo from '../../img/yangsearch_headshot_logo.png';
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
        <GlobalStyle/>
        <AppContainer>
          <ContentContainer>
            <MenuWrapper>
              <LogoWrapper>
                <Logo>
                  <img alt="YangSearch: Humanity First" src={ YangSearchLogo } onClick={() => this.resetSearch()}/>
                </Logo>
              </LogoWrapper>
              <MenuText>
                <li><a href="https://www.yang2020.com/" rel="noopener noreferrer" target="_blank">YANG2020.COM</a></li>
                <li><a href="https://www.yang2020.com/policies/" rel="noopener noreferrer" target="_blank">POLICY LIST (100+)</a></li>
                <li><a href="https://secure.actblue.com/donate/massachusetts_yang_gang" rel="noopener noreferrer" target="_blank">DONATE $20!</a></li>
                <li><a href="https://twitter.com/alacritythief" rel="noopener noreferrer" target="_blank">WHO CREATED THIS?</a></li>
              </MenuText>
            </MenuWrapper>
            <SearchContainer>
              <SearchInput
                ref="searchInput"
                updateSearchValue={this.updateSearchValue} 
                callback={this.getSearchCallback}
              />
              <ResetSearchButton onClick={() => this.resetSearch()}>RESET</ResetSearchButton>
            </SearchContainer>
            <YouTubePlayer />
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
