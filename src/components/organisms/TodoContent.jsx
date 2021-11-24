import React from 'react';
import Title from '../atoms/Title';
import InputSet from '../molecules/InputSet';
import TodoList from '../molecules/TodoList';
import theme from '../../styles/theme';
import styled from 'styled-components';

const TodoContent = ({ title, taskContent, taskBtn, inputBtn }) => {
  return (
    <TodoOrganism>
      <TitleWrapper>
        <Title content={title} titleClass="contentTitle" />
      </TitleWrapper>
      <StyledUl>
        {taskContent.map(item => (
          <TodoList content={item} btnContent={taskBtn} />
        ))}
      </StyledUl>
      <InputWrapper>
        <InputSet btnContent={inputBtn} />
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
