import { createGlobalStyle } from 'styled-components';
import * as c from './colors';

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }

  html {
    background-image: linear-gradient(${c.DARKBLUE}, ${c.LIGHTBLUE});
    background-attachment: fixed;
    font-size: 20px;
    font-family: Helvetica, Arial, sans-serif;
    margin-left: calc(100vw - 100%);
    background-color: ${c.COOLGRAY};
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
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
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`