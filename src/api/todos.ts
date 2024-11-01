import axios, {AxiosResponse} from "axios";
import { ITodo } from "../types/data";


export const fetchTodos = async () => {
    try {
        const response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const responseData: ITodo[] = response.data;
        return responseData.slice(0, 11);
    } catch(error) {
        console.log(error)
    }
}

export const fetchTodo = async (id: string) => {
    try {
        const response: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const responseData: ITodo = response.data;
        return responseData;
    } catch(error) {
        console.log(error)
    }
}