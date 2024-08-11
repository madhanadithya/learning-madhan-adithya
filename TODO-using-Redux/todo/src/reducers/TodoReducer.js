const initialState = {
  todos: [
    { name: 'Default Todo 1', status: 'incomplete' },
    { name: 'Default Todo 2', status: 'complete' }
  ],
};
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload),
        };
      case 'DELETE_ALL_TODOS':
        return {
          ...state,
          todos: [],
        };
      case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.index
              ? { ...todo, ...action.payload.updatedTodo }
              : todo
          ),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  

