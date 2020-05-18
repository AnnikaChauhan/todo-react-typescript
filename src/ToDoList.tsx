import React from 'react';
import { ToDoListItem } from './ToDoListItem';

interface ToDoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleTodo }) => {
    return (
    <ul>{todos.map((todo, index) => {
        return <ToDoListItem key={index} todo={todo} toggleTodo={toggleTodo}/>
    })}</ul>
    );
}