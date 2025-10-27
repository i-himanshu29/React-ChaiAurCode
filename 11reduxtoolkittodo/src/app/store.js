// Take the configure store and create configureStore

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Create and export the Redux store
export const store = configureStore({
  reducer: todoReducer,
});
