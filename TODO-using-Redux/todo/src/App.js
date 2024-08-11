import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store';
import TodoList from './ReduxTodo';
import EditTodo from './EditTodo';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />}>
            <Route path="edit/:index" element={<EditTodo />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;


