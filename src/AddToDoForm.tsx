import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddToDoFormProps {
    addTodo: AddTodo
}

export const AddToDoForm: React.FC<AddToDoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add To Do</button>
        </form>
    );
}