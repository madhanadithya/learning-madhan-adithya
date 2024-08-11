export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const deleteTodo = (index) => ({
    type: 'DELETE_TODO',
    payload: index,
  });
  
  export const deleteAllTodos = () => ({
    type: 'DELETE_ALL_TODOS',
  });
  
  export const editTodo = (index, updatedTodo) => ({
    type: 'EDIT_TODO',
    payload: { index, updatedTodo },
  });
  
  