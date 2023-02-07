import { createSlice } from '@reduxjs/toolkit';
import { signInAction, signOutAction } from './operationsAuth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { currentUser: null },
  reducers: {
    signIn: signInAction,
    signOut: signOutAction,
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
