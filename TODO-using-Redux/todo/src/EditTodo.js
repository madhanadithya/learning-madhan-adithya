import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editTodo } from './actions/todoactions';

const EditTodo = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (index !== undefined && todos[index]) {
      setName(todos[index].name);
      setStatus(todos[index].status);
    }
  }, [index, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo(Number(index), { name, status }));
    navigate('/');
  };

  return (
    <div className="edit-todo-container">
      <h1>Edit Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <button type="submit" className="submit-btn">Save</button>
      </form>
    </div>
  );
};

export default EditTodo;


