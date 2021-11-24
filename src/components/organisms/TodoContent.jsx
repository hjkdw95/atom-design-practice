import React from 'react';
import Title from '../atoms/Title';
import InputSet from '../molecules/InputSet';
import TodoList from '../molecules/TodoList';
import theme from '../../styles/theme';
import styled from 'styled-components';
import Form from '../atoms/Form';

const TodoContent = ({
  title,
  taskContent,
  taskBtn,
  inputBtn,
  onsubmit,
  inputBtnType,
  taskBtnType,
  btnClick,
  placeHolder,
  inputChange,
  formRef,
}) => {
  return (
    <TodoOrganism>
      <TitleWrapper>
        <Title content={title} titleClass="contentTitle" />
      </TitleWrapper>
      <StyledUl>
        {taskContent.map(item => (
          <TodoList
            key={item.id}
            id={item.id}
            content={item.content}
            btnContent={taskBtn}
            btnType={taskBtnType}
            btnClick={btnClick}
          />
        ))}
      </StyledUl>
      <InputWrapper>
        <InputSet
          inputChange={inputChange}
          placeHolder={placeHolder}
          onsubmit={onsubmit}
          btnType={inputBtnType}
          btnContent={inputBtn}
          formRef={formRef}
        />
      </InputWrapper>
    </TodoOrganism>
  );
};

export default TodoContent;

const TodoOrganism = styled.article`
  background-color: ${theme.white};
  border-radius: 15px;
  box-shadow: ${theme.shadow};
`;

const TitleWrapper = styled.div`
  padding: 25px 25px 10px 25px;
`;

const StyledUl = styled.ul`
  height: 400px;
  padding: 0 25px 10px 25px;
`;

const InputWrapper = styled.div`
  padding: 10px 20px;
  border-top: 1px solid;
  border-color: ${theme.lightGrey};
`;
