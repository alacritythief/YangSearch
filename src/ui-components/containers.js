import styled from 'styled-components';
import * as c from '../constants/colors';
import * as d from '../constants/devices';

export const AppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: ${d.MAX_PAGE_WIDTH};
  margin: 0 auto;
  padding: 0.5rem;
`

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`

export const PolicyResultsContainer = styled.div`
  background-color: ${c.COOLGRAY};
  border: 1px solid ${c.DARKGRAY};
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;

  p:nth-child(n+2) {
    margin-top: 1rem;
  }
`

export const WhiteText = styled.p`
  color: ${c.WHITE};

  a {
    color: ${c.WHITE};
  }

  a:hover {
    color: ${c.RED};
  }
`

export const Logo = styled.div`
  display: inline-block;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
  max-width: 300px;
  max-height: 61px;

  @media only screen and (max-width: ${d.MOBILE}){
    max-width: 290px;
    max-height: 59px;
  }

  @media only screen and (max-width: ${d.TINY}){
    max-width: 250px;
    max-height: 51px;
  }
`

export const MathHatContainer = styled.img`
  display: inline-block;
  vertical-align: top;
  height: 59px;
  width: 59px;

  @media only screen and (max-width: ${d.TINY}){
    max-width: 49px;
    max-height: 49px;
  }
`