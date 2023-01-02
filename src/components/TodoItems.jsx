import { useDispatch } from "react-redux"
import { DeleteTodo,ToggleStatus } from "../state/TodoSlise"

const TodoItems = ({id,completed,title}) => {

    const dispatch =useDispatch()


    return (
        <li key={id}>
            <input type="checkbox" checked={completed} onChange={() => { dispatch(ToggleStatus(id)) }} />
            <span>  {title} </span>
            <span onClick={() => { dispatch(DeleteTodo(id)) }} className='delete'>&times;</span>
          </li>
    )
}

export default TodoItems;