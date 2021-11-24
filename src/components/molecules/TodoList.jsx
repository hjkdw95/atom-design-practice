import React from 'react';
import ListContent from '../atoms/ListContent';
import Button from '../atoms/Button';
import theme from '../../styles/theme';
import styled from 'styled-components';
import Form from '../atoms/Form';

const TodoList = ({ content, btnContent, btnType }) => {
  return (
    <StyledLi>
      <ListContent color={theme.black} content={content} />
      <Button type={btnType} color={theme.lightGrey} content={btnContent} />
    </StyledLi>
  );
};
export default TodoList;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;
