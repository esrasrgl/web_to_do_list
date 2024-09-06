import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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

export const ToDoSlice = createSlice({
  name: "toDO",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default ToDoSlice.reducer;
