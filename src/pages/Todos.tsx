import { FC, useEffect, useRef, useState } from "react";
import TodoList from "../components/TodoList";
import { ITodo } from "../types/data";
import { fetchTodos } from "../api/todos";
import { title } from "process";


const Todos: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const onAddTodo = () => {
        const title = inputRef.current?.value;
        if (title) {
            const newTodo:ITodo = {
                id: todos.length + 1,
                title: inputRef.current?.value ,
                completed: false
            }
        setTodos([...todos, newTodo]);
        inputRef.current.value = ''; 
        }

    }

    useEffect(() => {
        fetchTodos().then(result => {
            if (result) {
                setTodos(result)
            }
        })
    }, [])


    return (
        <>
          <h1>Todos</h1>
          <div>
            <input type="text" ref={inputRef}/>
            <button onClick={onAddTodo}>ADD NEW TODO</button>
          </div>
          <TodoList todos={todos}/>
         
        </>

    )
}

export default Todos;