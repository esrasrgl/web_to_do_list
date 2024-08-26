import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoItems: [
    { text: "task1", id: 1 },
    { text: "task2", id: 2 },
  ],
};

export const ToDoSlice = createSlice({
  name: "toDO",
  initialState: initialState,
  reducers: {
    add_item: (state, action) => {
      const text = action.payload;
      const id = Math.random().toString();
      const isDone = false;
      console.log(text, id, isDone);
      state.toDoItems.push({ text, id, isDone });
    },
    delete_item(state, action) {
      const id = action.payload;
      state.toDoItems = state.toDoItems.filter((toDo) => toDo.id !== id);
    },
    edit_item(state, action) {
      const { id, newText } = action.payload;
      const item = state.toDoItems.find((item) => item.id === id);
      if (item) {
        item.text = newText;
      }
    },
  },
});

export default ToDoSlice.reducer;
export const { add_item, delete_item, edit_item } = ToDoSlice.actions;
