import React, { useState } from 'react';
import ToDoTemplate from './ToDoTemplate';

const ToDoPage = props => {
  const NavTitle = 'Atom Todos';
  const NavTitleClass = 'HeaderTitle';
  const NavList = [
    { id: 1, content: 'Todos' },
    { id: 2, content: 'Movie List' },
  ];
  const HEAD_TITLE = 'Task';
  const DeleteBtn = 'Delete';
  const SubmitBtn = 'Submit';

  const TODO_INPUT_PLACEHOLDER = 'Click to quickly add a task';

  return (
    <ToDoTemplate
      navTitle={NavTitle}
      navTitleClass={NavTitleClass}
      navList={NavList}
      contentTitle={HEAD_TITLE}
      taskBtn={DeleteBtn}
      inputBtn={SubmitBtn}
      placeholder={TODO_INPUT_PLACEHOLDER}
    />
  );
};

export default ToDoPage;
