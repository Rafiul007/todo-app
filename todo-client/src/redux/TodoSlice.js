import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  todos: [],
  status: "idle",
  error: null,
};
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get("/api/todos");
  return response.data;
});
export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await axios.post("/api/todos", todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`/api/todos/${id}`);
  return id;
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchTodos.pending]: (state, action) => {
        state.status = 'loading';
      },
      [fetchTodos.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      },
      [fetchTodos.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
      [addTodo.fulfilled]: (state, action) => {
        state.todos.push(action.payload);
      },
      [deleteTodo.fulfilled]: (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      },
    },
  });
  
  export default todoSlice.reducer;