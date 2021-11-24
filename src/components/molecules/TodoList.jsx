import React from 'react';
import ListContent from '../atoms/ListContent';
import Button from '../atoms/Button';
import theme from '../../styles/theme';
import styled from 'styled-components';

const TodoList = ({ content, btnContent }) => {
  return (
    <StyledLi>
      <ListContent color={theme.black} content={content} />
      <Button color={theme.lightGrey} content={btnContent} />
    </StyledLi>
  );
};
export default TodoList;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;
