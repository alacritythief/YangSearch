import { createGlobalStyle } from 'styled-components';
import * as c from './colors';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 20px;
    font-family: Helvetica, Arial, sans-serif;
    margin-left: calc(100vw - 100%);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${c.MEDBLUE};
  }

  a:hover {
    text-decoration: none;
  }
`