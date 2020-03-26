import { configureStore } from '@reduxjs/toolkit';
import todosReducers from './features/todos/todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducers,
  },
});
