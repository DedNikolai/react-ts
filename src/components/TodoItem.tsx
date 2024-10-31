import { ITodo } from "../types/data";
import {FC, ReactElement, useState} from 'react';
import {Link} from 'react-router-dom';

interface ITodoItem {
    todo: ITodo,
}

const TodoItem: FC<ITodoItem> = ({todo}) => {
    const {id, title, completed} = todo;
    const [isChecked, setIsChecked] = useState<boolean>(completed)

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }
    
    return (
        <div className="todo-item">
            <Link to={`/todos/${id}`}>
                <span>{`${id}. ${title} `}</span>
            </Link>
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={onChangeHandler}
              className="todo-checkboks"
            />
        </div>
    )
}

export default TodoItem;