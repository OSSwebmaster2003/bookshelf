import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../api/auth";

const initialState = {
  authRes: {},
  authLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthRes: (state) => {
      state.authRes = {};
      state.authLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(auth.fulfilled, (state, { payload }) => {
        state.authRes = payload;
        state.authLoading = false;
      })
      .addCase(auth.rejected, (state) => {
        state.authLoading = false;
      });
  },
});

export const { clearAuthRes } = authSlice.actions;
export default authSlice.reducer;
