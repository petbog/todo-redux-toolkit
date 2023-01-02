import { useState } from 'react';
import './App.css';
import ListList from './components/TodoList';
import InputField from './components/InputField';
import { useDispatch } from 'react-redux';
import { addTodo } from './state/TodoSlise';

function App() {

  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const AddTask = () => {
    dispatch(addTodo({ text }));
    setText('')
  }
  return (
    <div className="App">
      <div className="">
        <InputField text={text} hamdleInput={setText} handleSubmit={AddTask} />
        <ListList />
      </div>
    </div>
  );
}

export default App;
