import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';

const Input = () => {
  const TODO_INPUT_PLACEHOLDER = 'Click to quickly add a task';

  return (
    <InputWrapper>
      <StyledInput placeholder={TODO_INPUT_PLACEHOLDER}></StyledInput>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  width: 100%;
  margin-right: 10px;
  padding: 0 20px;
  background-color: ${theme.white};
  border: 1px solid;
  border-color: ${theme.lightGrey};
  border-radius: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 38px;
  border: none;
  font-weight: 300;
`;
