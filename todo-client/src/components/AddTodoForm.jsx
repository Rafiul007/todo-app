import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import './AddTodoForm.css';

function AddTodoForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title,
            description
        }));
        setTitle('');
        setDescription('');
    };
    return (
        <div className="add-todo-form-container">
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit} className="add-todo-form">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type="submit" className="add-button">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodoForm