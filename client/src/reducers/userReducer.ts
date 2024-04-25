import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  username: string;
  userMessage: string;
}

// Define the initial state using that type
const initialState: UserState = {
  isLoggedIn: false,
  username: '',
  userMessage: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      if (state.username.length > 0) {
        state.isLoggedIn = true;
      }
    },
    updateMessage: (state, action: PayloadAction<string>) => {
      if (typeof action.payload === 'string') {
        state.userMessage = action.payload;
      }
    },
    clearMessage: (state) => {
      state.userMessage = '';
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      if (typeof action.payload === 'string') {
        state.username = action.payload;
      }
    },
  },
});

export const { login, updateMessage, clearMessage, updateUsername } = userSlice.actions;

export default userSlice.reducer;
