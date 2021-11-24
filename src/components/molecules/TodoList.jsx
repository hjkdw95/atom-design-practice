import React from 'react';
import ListContent from '../atoms/ListContent';
import Button from '../atoms/Button';
import theme from '../../styles/theme';
import styled from 'styled-components';

const TodoList = props => {
  const LIST = '밥먹기';
  const DeleteBtn = 'Delete';

  return (
    <StyledLi>
      <ListContent color={theme.black} content={LIST} />
      <Button color={theme.lightGrey} content={DeleteBtn} />
    </StyledLi>
  );
};
export default TodoList;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
`;
