import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./TodoSlise"

export default configureStore({
    reducer: {
        todos: todoReduser
    }
})