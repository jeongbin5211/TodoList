import React from "react";
import styled from "styled-components";
import useStore from "../stores/UseStore";

const TodoHeadBlock = styled.div`
  padding: 50px 30px 25px 30px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e99;
    font-size: 20px;
  }

  .tasks-left {
    color: #20cccc;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  //! '해야 할 일'의 개수를 상태로 관리
  // store.ts에 countTasks함수를 정의

  // useStore에서 남은 할 일의 개수를 받아오기
  const countTasks = useStore((state) => state.countTasks(state));

  return (
    <TodoHeadBlock>
      <h1> 2023년 07월 14일 </h1>
      <div className="day"> 금요일 </div>
      <div className="tasks-left">할 일 {countTasks}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
