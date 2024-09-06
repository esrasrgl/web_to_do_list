import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
};
export const getUserInfo = createAsyncThunk("getUserInfo", async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos`
  );
  const data = await response.data;
  return data;
});

export const UserSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.fulfilled, (state = initialState, action) => {
        const uniqUsers = action.payload.filter(
          (user, index, self) =>
            index === self.findIndex((t) => t.userId === user.userId)
        );
        state.users = uniqUsers;
      })
      .addCase(getUserInfo.pending, (state = initialState) => {
        // loading or animation
        state.users = {};
      })
      .addCase(getUserInfo.rejected, (state = initialState) => {
        // error
        state.users = {};
      });
  },
});

export default UserSlice.reducer;
