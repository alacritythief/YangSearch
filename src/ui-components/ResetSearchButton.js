import styled from 'styled-components';
import * as c from '../constants/colors';
// import * as d from '../constants/devices';

export const ResetSearchButton = styled.button`
  border: 1px solid ${c.BLACK};
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: ${c.WHITE};
  background-color: ${c.RED};
  font-size: 18px;
  padding: 0.5rem;
  outline: none;

  &:hover {
    background-color: ${c.LIGHTRED};
    cursor: pointer;
  }

  &:active {
    background-color: ${c.DARKRED};
  }
`