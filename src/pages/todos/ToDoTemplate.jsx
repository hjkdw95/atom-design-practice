import React, { useRef, useState } from 'react';
import Navbar from '../../components/organisms/Navbar';
import TodoContent from '../../components/organisms/TodoContent';
import styled from 'styled-components';

const ToDoTemplate = ({
  navTitle,
  navTitleClass,
  navList,
  contentTitle,
  taskBtn,
  inputBtn,
  placeholder,
}) => {
  const formRef = useRef();
  const [toDoTask, setToDo] = useState([]);
  const [inputContent, setInputContent] = useState('');

  const addItem = e => {
    e.preventDefault();
    const newTask = { id: Date.now(), content: inputContent };
    const newTaskList = [...toDoTask, newTask];
    setToDo(newTaskList);
    formRef.current.reset();
  };

  const deleteItem = e => {
    const currentId = e.target.parentNode.id;
    const newTaskList = toDoTask.filter(item => item.id !== +currentId);
    setToDo(newTaskList);
  };

  const handleInputChange = e => {
    setInputContent(e.target.value);
  };

  return (
    <>
      <Navbar title={navTitle} titleClass={navTitleClass} navList={navList} />
      <TodoContentWrapper>
        <TodoContent
          title={contentTitle}
          taskBtn={taskBtn}
          inputBtn={inputBtn}
          placeHolder={placeholder}
          taskContent={toDoTask}
          formRef={formRef}
          onsubmit={addItem}
          inputChange={handleInputChange}
          inputBtnType="submit"
          taskBtnType="button"
          btnClick={deleteItem}
        />
      </TodoContentWrapper>
    </>
  );
};

export default ToDoTemplate;

const TodoContentWrapper = styled.div`
  width: 30%;
  min-width: 350px;
  margin: 30px auto;
`;
