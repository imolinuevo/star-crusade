import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AuthState {
  loggedIn: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
};

const logIn = () => {
  return true;
};

const logOut = () => {
  return false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = logIn();
    },
    logOut: (state) => {
      state.loggedIn = logOut();
    },
  },
});

export const selectLoginStatus = (state: RootState) => state.auth.loggedIn;
export default authSlice.reducer;
