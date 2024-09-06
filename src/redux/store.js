import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./ToDoSlice";

export default function createStore(preloadedState) {
  return configureStore({
    reducer: {
      toDo: ToDoSlice,
    },
    preloadedState,
  });
}