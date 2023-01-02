import { useState, useEffect } from 'react';
import './App.css';
import ListList from './components/TodoList';
import InputField from './components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, AxiosTodos } from './state/TodoSlise';

function App() {

  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const AddTask = () => {
    dispatch(addTodo({ text }));
    setText('')
  }

  useEffect(() => {
    dispatch(AxiosTodos())
  }, [dispatch]);

  const { status, error } = useSelector(state => state.todos);

  return (
    <div className="App">
      <div className="">
        <InputField text={text} hamdleInput={setText} handleSubmit={AddTask} />
        {status === 'loading' && <h1>Loading...</h1>}
        {error && <h1>ServerError:{error}</h1>}
        <ListList />
      </div>
    </div>
  );
}

export default App;
