import React from 'react';
import Navbar from '../../components/organisms/Navbar';
import TodoContent from '../../components/organisms/TodoContent';
import styled from 'styled-components';

const ToDoTemplate = props => {
  const NavTitle = 'Atom Todos';
  const NavTitleClass = 'HeaderTitle';
  const NavList = ['Todos', 'MovieList'];
  const HEAD_TITLE = 'Task';
  const TASK = ['밥먹기', '잠자기', '운동하기'];
  const DeleteBtn = 'Delete';
  const SubmitBtn = 'Submit';

  return (
    <>
      <Navbar title={NavTitle} titleClass={NavTitleClass} navList={NavList} />
      <TodoContentWrapper>
        <TodoContent
          title={HEAD_TITLE}
          taskContent={TASK}
          taskBtn={DeleteBtn}
          inputBtn={SubmitBtn}
        />
      </TodoContentWrapper>
    </>
  );
};

export default ToDoTemplate;

const TodoContentWrapper = styled.div`
  width: 30%;
  margin: 30px auto;
`;
