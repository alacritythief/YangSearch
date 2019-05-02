import styled from 'styled-components';
import * as c from '../../constants/colors';

export const InputBox = styled.input`
  border: 1px solid ${c.DARKGRAY};
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex-grow: 1;
  font-size: 18px;
  font-family: open-sans, sans-serif;
  font-weight: 300;
  margin-right: 0.5rem;
  padding: 0.5rem;
  outline: none;
`