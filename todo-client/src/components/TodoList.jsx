import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo } from '../redux/TodoSlice';
import './TodoList.css';
function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    //fetch todos
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    //handle delete  todo
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    return (
        <div className="todo-list-container">
            <h2>Todo List</h2>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo._id} className="todo-item">
                        <div className='todo'>
                            <div className='todo-content'>
                                <span>{todo.title}</span>
                                <p>{todo.description}</p>
                            </div>
                            <div className='btn-group'>
                            <button  className="update-button">Update</button>
                            <button onClick={() => handleDelete(todo._id)} className="delete-button">Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList