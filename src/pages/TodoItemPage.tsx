import { FC, useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { ITodo } from "../types/data";
import { fetchTodo } from "../api/todos";

type Params = {
    id: string;
}

const TodoItem: FC = () => {
    const {id} = useParams<Params>();
    const [todo, setTodo] = useState<ITodo | null>(null);

    useEffect(() => {
        if (id) {
            fetchTodo(id).then(result => {
                if (result) {
                    setTodo(result);
                }
            })
        }
    }, [])

    return (
        <>
          <h1>TodoItem</h1>
          <h2>{id}</h2>
          <h3>{todo?.title}</h3>
          <h4>IS Done: {todo?.completed ? 'YES' : "NO"}</h4>
        </>
    )
}

export default TodoItem;