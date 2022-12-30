const TodoItems = ({id,completed,text,removeTodo,toggleTodoCompleted}) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={completed} onChange={() => { toggleTodoCompleted(id) }} />
            <span>  {text} </span>
            <span onClick={() => { removeTodo(id) }} className='delete'>&times;</span>
          </li>
    )
}

export default TodoItems;