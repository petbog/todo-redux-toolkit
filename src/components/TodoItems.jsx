import { useDispatch } from "react-redux"
import { removeTodo,toggleTodoCompleted } from "../state/TodoSlise"

const TodoItems = ({id,completed,text}) => {

    const dispatch =useDispatch()


    return (
        <li key={id}>
            <input type="checkbox" checked={completed} onChange={() => { dispatch(toggleTodoCompleted({id})) }} />
            <span>  {text} </span>
            <span onClick={() => { dispatch(removeTodo({id})) }} className='delete'>&times;</span>
          </li>
    )
}

export default TodoItems;