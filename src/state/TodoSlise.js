import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AxiosTodos = createAsyncThunk(
    'todos/AxiosTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=20`).then(res => res.data)
            if (!!response.ok) {
                throw new Error('ServerError');
            }
            return await response
        } catch (error) {
            return rejectWithValue(error.message)
        }


    }
)
export const DeleteTodo = createAsyncThunk(
    'todos/DeleteTodo',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.data)
            if (!!response.ok) {
                throw new Error('ServerError.Delete task')
            }
            dispatch(removeTodo({ id }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const ToggleStatus = createAsyncThunk(
    'todos/ToggleStatus',
    async function (id, { rejectWithValue, dispatch, getState }) {
        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        completed:!todo.completed
                    })
                }).then(res => res.data)
            if (!!response.ok) {
                throw new Error('Server Error')
            }
            dispatch(toggleTodoCompleted({ id }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function(text,{rejectWithValue,dispatch}){
        try {
            const todo ={
                id:1,
                title:text,
                completed:false
            }
            const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(todo)
            })
            if(!!response.ok){
                throw new Error('Server Error')
            }
            const obj = JSON.parse(response.data.body)
            dispatch(addTodo(obj))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
const SetError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload
}

const todoSlise = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        toggleTodoCompleted(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)

            toggledTodo.completed = !toggledTodo.completed
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
    },
    extraReducers: {
        //идет загрузка
        [AxiosTodos.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        //данные  получены
        [AxiosTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload
        },
        //обработка ошибок
        [AxiosTodos.rejected]: SetError,
        [DeleteTodo.rejected]: SetError,
        [ToggleStatus.rejected]: SetError,
        [addNewTodo.rejected]: SetError,
    }
})

const { addTodo, removeTodo, toggleTodoCompleted } = todoSlise.actions

export default todoSlise.reducer