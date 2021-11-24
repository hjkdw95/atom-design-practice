import React from 'react';
import Form from '../atoms/Form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import theme from '../../styles/theme';
import styled from 'styled-components';

const InputSet = ({
  btnType,
  btnContent,
  onsubmit,
  inputChange,
  placeHolder,
  formRef,
}) => {
  return (
    <Form formRef={formRef} onsubmit={onsubmit}>
      <StyledInputSet>
        <Input inputChange={inputChange} placeHolder={placeHolder} />
        <Button type={btnType} color={theme.blue} content={btnContent} />
      </StyledInputSet>
    </Form>
  );
};

export default InputSet;

const StyledInputSet = styled.div`
  display: flex;
  justify-content: space-between;
`;
