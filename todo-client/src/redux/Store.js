import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/TodoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
