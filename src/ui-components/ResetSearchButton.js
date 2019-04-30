import styled from 'styled-components';
import * as c from '../constants/colors';
// import * as d from '../constants/devices';

export const ResetSearchButton = styled.button`
  border: 1px solid ${c.BLACK};
  border-radius: 3px;
  color: ${c.WHITE};
  background-color: ${c.RED};
  font-size: 18px;
  padding: 0.5rem;
  outline: none;

  &:hover {
    background-color: ${c.LIGHTRED};
  }

  &:active {
    background-color: ${c.DARKRED};
  }
`