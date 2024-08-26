import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./ToDoSlice";

export default configureStore({
  reducer: {
    toDo: ToDoSlice,
  },
});
