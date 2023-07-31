import React from 'react'
import styled from 'styled-components';
import TodoItem from '../TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 30px 50px;
    overflow-y: auto;
    

`;

function TodoList() {
  return (
  <TodoListBlock>
    <TodoItem text='평일 웹 프론트엔드' done={false}/>
    <TodoItem text='ReducerSample 코드 주석 추가' done={false}/>
    <TodoItem text='상태관리 프로그램' done={true}/>
    <TodoItem text='평일 오전반 보강' done={true}/>
  </TodoListBlock>
  )
}

export default TodoList