import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { deleteTodo, deleteAllTodos, addTodo } from './actions/todoactions';

const ReduxTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [newTodoName, setNewTodoName] = useState('');
  const [newTodoStatus, setNewTodoStatus] = useState('incomplete');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoName) {
      dispatch(addTodo({ name: newTodoName, status: newTodoStatus }));
      setNewTodoName('');
      setNewTodoStatus('incomplete');
    }
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTodos());
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      <form onSubmit={handleAddTodo} className="add-todo-form">
        <label>
          Name:
          <input
            type="text"
            value={newTodoName}
            onChange={(e) => setNewTodoName(e.target.value)}
            placeholder="Enter todo name"
          />
        </label>
        <label>
          Status:
          <select
            value={newTodoStatus}
            onChange={(e) => setNewTodoStatus(e.target.value)}
          >
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <button type="submit" className="add-todo-btn">Add Todo</button>
      </form>

      <button onClick={handleDeleteAll} className="delete-all-btn">Delete All</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo.name} - {todo.status}</span>
            <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
            <Link to={`/edit/${index}`} className="edit-link">Edit</Link>
          </li>
        ))}
      </ul>
      <Outlet /> 
    </div>
  );
};

export default ReduxTodo;
