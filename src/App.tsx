import React from 'react';

import {ToDoListItem} from './ToDoListItem';


const todos: Array<Todo> = [{text: 'Walk Somewhere', complete: true}, {text: 'Code Something', complete: false}]

const App: React.FunctionComponent = () => {
  return(
    <div>
      <h1>To Do App</h1>
      <ToDoListItem todo={todos[0]} />
    </div>
  );
}

export default App;