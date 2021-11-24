import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';

const Input = ({ placeHolder, inputChange }) => {
  return (
    <InputWrapper>
      <StyledInput
        placeholder={placeHolder}
        onChange={inputChange}
      ></StyledInput>
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
