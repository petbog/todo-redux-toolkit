import TodoItems from "./TodoItems";

const ListList = ({removeTodo,toggleTodoCompleted,todos}) => {
    return (
        <ul className="">
            {todos.map(todo => <TodoItems key={todo.id} toggleTodoCompleted={toggleTodoCompleted}  removeTodo={removeTodo} {...todo}/>)}
        </ul>
    )
}

export default ListList;