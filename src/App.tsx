import React, { useState } from 'react';

import { ToDoList } from './ToDoList';


const initialTodos: Array<Todo> = [{text: 'Walk Somewhere', complete: true}, {text: 'Code Something', complete: false}]

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return(
    <div>
      <h1>To Do App</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;