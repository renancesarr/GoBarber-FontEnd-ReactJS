import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  height: 56px;
  background: #ff9000;
  border-radius: 10px;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  border: none;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
