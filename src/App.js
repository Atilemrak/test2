import { useState } from 'react'


import Todo from './Todo';
import TodoForm from './TodoForm';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem]);
    }
  };

  //чек, или удалить
  const handleToogle = (e, id) => {
    if (e === 'item-delete') {
      setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    else {
      setTodos([...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })])
    }
  };

  return (
    <div className="App">
      <header>
        <h1>
          Список задач: {todos.length}
        </h1>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={handleToogle}
          />
        )
      })}
    </div>
  );
}

export default App;
