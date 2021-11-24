import React, { useState } from 'react';
import Navbar from '../../components/organisms/Navbar';
import TodoContent from '../../components/organisms/TodoContent';
import styled from 'styled-components';

const ToDoTemplate = props => {
  const [toDoTask, setToDo] = useState([
    { id: 1, content: '밥먹기' },
    { id: 2, content: '잠자기' },
    { id: 3, content: '운동하기' },
  ]);

  const NavTitle = 'Atom Todos';
  const NavTitleClass = 'HeaderTitle';
  const NavList = [
    { id: 1, content: 'Todos' },
    { id: 2, content: 'Movie List' },
  ];
  const HEAD_TITLE = 'Task';
  const DeleteBtn = 'Delete';
  const SubmitBtn = 'Submit';

  const handleSubmit = e => {
    e.preventDefault();
    console.log('did');
  };

  const handleClick = e => {
    const currentId = e.target.parentNode.id;
    const newTaskList = toDoTask.filter(item => item.id !== +currentId);
    setToDo(newTaskList);
  };

  return (
    <>
      <Navbar title={NavTitle} titleClass={NavTitleClass} navList={NavList} />
      <TodoContentWrapper>
        <TodoContent
          title={HEAD_TITLE}
          taskContent={toDoTask}
          taskBtn={DeleteBtn}
          inputBtn={SubmitBtn}
          onsubmit={handleSubmit}
          inputBtnType="submit"
          taskBtnType="button"
          btnClick={handleClick}
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
