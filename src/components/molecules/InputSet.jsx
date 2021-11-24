import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import theme from '../../styles/theme';
import styled from 'styled-components';

const InputSet = ({ btnContent }) => {
  return (
    <StyledInputSet>
      <Input />
      <Button color={theme.blue} content={btnContent} />
    </StyledInputSet>
  );
};

export default InputSet;

const StyledInputSet = styled.div`
  display: flex;
  justify-content: space-between;
`;
