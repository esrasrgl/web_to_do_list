import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./ToDoSlice";
import UserSlice from "./UserSlice";

export default function createStore(preloadedState) {
  return configureStore({
    reducer: {
      toDo: ToDoSlice,
      users: UserSlice,
    },
    preloadedState,
  });
}