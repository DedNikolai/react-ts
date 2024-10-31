import { FC } from "react";
import { ITodo } from "../types/data";
import TodoItem from "./TodoItem";

interface ItodoList {
    todos: ITodo[]
}


const TodoList: FC<ItodoList> = ({todos}) => {
    return (
        <>
        {todos.map(item => <TodoItem key={item.id} todo={item} />)}
        </>
    )
}

export default TodoList;