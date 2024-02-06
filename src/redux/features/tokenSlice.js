import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myToken: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    createToken: (state, action) => {
      state.myToken = action.payload;
    },
  },
});

export const { createToken } = tokenSlice.actions;
export default tokenSlice.reducer;
