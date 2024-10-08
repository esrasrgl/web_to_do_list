import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";
const initialState = {
  toDoItems: [],
};
export const getToDoInfo = createAsyncThunk("getToDoInfo", async (userId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  const data = await response.data;
  return data;
});

export const addToDo = createAsyncThunk("addToDo", async (newItem) => {
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/todos?userId=${newItem.userId}`,
    newItem
  );
  const data = await response.data;
  return data;
});

export const editToDo = createAsyncThunk(
  "editToDo",
  async ({ updatedToDo }) => {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${updatedToDo.id}`,
      updatedToDo
    );
    const data = await response.data;
    return data;
  }
);

export const deleteToDo = createAsyncThunk("deleteToDo", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
});
export const ToDoSlice = createSlice({
  name: "toDO",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getToDoInfo.fulfilled, (state = initialState, action) => {
        state.toDoItems = action.payload;
      })
      .addCase(getToDoInfo.pending, (state = initialState) => {
        // loading or animation
        state.toDoItems = {};
      })
      .addCase(getToDoInfo.rejected, (state = initialState) => {
        // error
        state.toDoItems = {};
      })
      //post
      .addCase(addToDo.fulfilled, (state = initialState, action) => {
        state.toDoItems.push(action.payload);
      })
      .addCase(addToDo.rejected, (state = initialState) => {
        // error
        state.toDoItems = {};
      })
      //edit
      .addCase(editToDo.fulfilled, (state = initialState, action) => {
        const index = state.toDoItems.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          state.toDoItems[index] = action.payload;
        }
      })
      .addCase(editToDo.rejected, (state = initialState) => {
        // error
        state.toDoItems = {};
      })
      .addCase(deleteToDo.fulfilled, (state = initialState, action) => {
        state.toDoItems = state.toDoItems.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteToDo.rejected, (state = initialState, action) => {
        state.toDoItems = {};
      });
  },
});

export default ToDoSlice.reducer;
