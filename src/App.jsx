import { useState } from 'react';
import './App.css';
import ListList from './components/TodoList';
import InputField from './components/InputField';

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('');
    }
  }

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed
          }
        }
      )
    )
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }
  return (
    <div className="App">
      <div className="">
        <InputField text={text} hamdleInput={setText} handleSubmit={addTodo} />
        <ListList todos={todos} toggleTodoCompleted={toggleTodoCompleted} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
