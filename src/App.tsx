import React, { useState } from 'react';

import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';


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

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}]);
  }

  return(
    <div>
      <h1>To Do App</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <AddToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App;