import React from 'react';
import styled from 'styled-components';

const Input = props => {
  return <StyledInput placeholder="Click to quickly add a task"></StyledInput>;
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 38px;
  border: none;
  font-weight: 300;
`;
