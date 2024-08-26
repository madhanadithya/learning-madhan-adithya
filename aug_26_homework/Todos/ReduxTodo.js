import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './ReduxTodo.css'; 

const ReduxTodo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ name: '', status: 'incomplete', description: '' });
    const [editingTodo, setEditingTodo] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); 

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('/todos');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    useEffect(() => {
        if (id) {
            const fetchTodo = async () => {
                try {
                    const response = await axios.get(`/todos/${id}`);
                    setEditingTodo(response.data);
                    setNewTodo(response.data); 
                } catch (error) {
                    console.error('Error fetching todo:', error);
                }
            };

            fetchTodo();
        }
    }, [id]);

    const handleAddTodo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/todos', newTodo);
            setTodos([...todos, response.data]);
            setNewTodo({ name: '', status: 'incomplete', description: '' });
        } catch (error) {
            console.error('Error adding todo:', error);
            setError(error.response?.data?.errors || 'Error adding todo');
        }
    };

    const handleUpdateTodo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/todos/${id}`, newTodo);
            setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
            navigate('/');
        } catch (error) {
            console.error('Error updating todo:', error);
            setError(error.response?.data?.errors || 'Error updating todo');
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`/todos/${id}`);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="container">
            <h1>Todo List Manager</h1>
            <form onSubmit={id ? handleUpdateTodo : handleAddTodo} className="todo-form">
                <input
                    type="text"
                    value={newTodo.name}
                    placeholder="Name"
                    onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
                    required
                />
                <select
                    value={newTodo.status}
                    onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
                    required
                >
                    <option value="complete">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <textarea
                    value={newTodo.description}
                    placeholder="Description (optional)"
                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                />
                <button type="submit">{id ? 'Update Todo' : 'Add Todo'}</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <div className="todo-list">
                {todos.map((todo) => (
                    <div key={todo._id} className="todo-item">
                        <h3>{todo.name}</h3>
                        <p>Status: <span className={todo.status}>{todo.status}</span></p>
                        {todo.description && <p>Description: {todo.description}</p>}
                        <div className="todo-actions">
                            <button onClick={() => handleDeleteTodo(todo._id)} className="delete-btn">Delete</button>
                            <Link to={`/todos/${todo._id}`} className="edit-link">Update Todo</Link>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={async () => {
                    try {
                        await axios.delete('/todos');
                        setTodos([]);
                    } catch (error) {
                        console.error('Error deleting all todos:', error);
                    }
                }}
                className="delete-all-btn"
            >
                Delete All
            </button>
        </div>
    );
};

export default ReduxTodo;
