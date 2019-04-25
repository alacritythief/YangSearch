import React from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer
} from '../../ui-components/containers';
import SearchInput from '../../components/SearchInput';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <ContentContainer>
            <h1>Yang2020 Search</h1>
            <SearchInput />
          </ContentContainer>
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
