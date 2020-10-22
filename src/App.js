import React, { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import {TODOS_MUI, storage} from './constants'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (name) => {
    setTodos(currTodos => [
      ...currTodos, 
      {
        id: uuidv4(),
        name: name,
        completed: false
      }
    ])
  }

  const changeStatus = (id) => setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))

  useEffect(() => {
    const lsTodos = storage[TODOS_MUI] 
      ? JSON.parse(storage[TODOS_MUI])
      : []

      setTodos(lsTodos)
  },[])
  
  useEffect(() => {
    storage[TODOS_MUI] = JSON.stringify(todos)
  }, [todos])



  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        changeStatus={changeStatus} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;
