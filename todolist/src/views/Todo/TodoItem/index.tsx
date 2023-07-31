import React from 'react'
import styled, {css} from 'styled-components';
import { MdDelete, MdDone } from 'react-icons/md';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dddddd;
    font-size: 25px;
    cursor: pointer;
    &:hover {
        color: #ff66bb;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display:initial;
        }
    }
`;

const CheckCircle = styled.div<{ done: boolean}>`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #cecece;
    font-size: 25px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${(props) => props.done && css`border: 1px solid #38d9a9; color:38d9a9;`}
`;

const Text = styled.div<{ done: boolean }>`
    flex: 1;
    font-size: 21px;
    color: #494949;
    ${(props) => props.done && css`color: #eeeeee`}
`;



// done과 text의 타입 설정
interface TodoItemProps {
    id?: number;
    done: boolean;
    text: string;
}

function TodoItem({id, done, text}: TodoItemProps) {
  return (
    <TodoItemBlock>
        <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove>
            <MdDelete />
        </Remove>
    </TodoItemBlock>
  )
}

export default TodoItem