import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setCredentials: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true
    },

    removeCredentials: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false
    }
  }
})

export const { setCredentials, removeCredentials } = authSlice.actions;

export default authSlice.reducer;