import styled from 'styled-components';
import * as c from '../constants/colors';
import * as d from '../constants/devices';

export const AppContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: ${d.MAX_PAGE_WIDTH};
  margin: 0 auto;
  padding: 0.5rem;
`

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-grow: 1;
`

export const BlurbContainer = styled.div`
  color: ${c.WHITE};
  display: inline-block;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, .7));
  margin-top: 1rem;
  padding: 0 0.2rem;
  width: 100%;
  text-align: center;

  a {
    color: ${c.WHITE};
  }

  a:hover {
    color: ${c.RED};
    text-decoration: none;
  }

  @media only screen and (max-width: ${d.MAX_PAGE_WIDTH}){
    br {
      display: none;
    }
  }
`

export const FollowContainer = styled.div`
  color: ${c.WHITE};
  display: inline-block;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, .7));
  font-family: montserrat, sans-serif;
  margin-top: 1rem;
  width: 100%;
  text-align: center;

  p {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  ul li {
    border: 1px solid ${c.WHITE};
    border-radius: 5rem;
    padding: 6px 9px 5px 7px;
    display: inline-block;
    margin: 0.2rem 0.5rem;

    &:hover {
      background-color: ${c.LIGHTBLUE};
    }
  }
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
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const MenuText = styled.ul`
  color: ${c.WHITE};
  display: flex;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, .7));
  font-family: montserrat, sans-serif;
  font-weight: 700;
  font-size: 18px;

  @media only screen and (max-width: ${d.TABLET}){
    flex-direction: column;
  }

  a {
    color: ${c.WHITE};
  }

  a:hover {
    color: ${c.RED};
    text-decoration: none;
  }

  li {
    display: inline-block;
    margin: 0 0.4rem;
    text-align: center;
  }
`

export const LogoWrapper = styled.div`
  flex-direction: row;
`

export const Logo = styled.div`
  display: inline-block;
  cursor: pointer;
  max-width: 680px;
  margin-bottom: 0.5rem;
  margin-left: 10px;
`

export const MathHatContainer = styled.img`
  display: inline-block;
  height: 59px;
  width: 59px;
  vertical-align: top;

  @media only screen and (max-width: ${d.TINY}){
    max-width: 49px;
    max-height: 49px;
  }
`

export const VideoContainer = styled.div`
`

export const VideoResultsList = styled.ul`
`