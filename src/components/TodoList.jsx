import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";

const ListList = () => {
    const todos = useSelector(state => state.todos.todos)

    return (
        <ul className="">
            {todos.map(todo => <TodoItems key={todo.id} {...todo}/>)}
        </ul>
    )
}

export default ListList;