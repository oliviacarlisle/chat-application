import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Message {
  sender: string;
  message: string;
  createdAt: string;
  id: string;
}

interface MessagesState {
  list: Message[];
  idList: Record<string, boolean>;
}

// Define the initial state using that type
const initialState: MessagesState = {
  list: [],
  idList: {}, // to prevent duplicates
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    loadMessages: (state, action: PayloadAction<Message[]>) => {
      action.payload.forEach((msg) => {
        if (!state.idList[msg.id]) {
          state.list.push(msg);
          state.idList[msg.id] = true;
        }
      });
    },
    loadOneNew: (state, action: PayloadAction<Message>) => {
      const len = state.list.length;
      const newMsg = action.payload;
      const lastTimestamp = len > 0 ? new Date(state.list[len - 1].createdAt) : undefined;
      const newTimestamp = new Date(newMsg.createdAt);
      if (!lastTimestamp || newTimestamp > lastTimestamp) {
        if (!state.idList[newMsg.id]) {
          state.list.push(newMsg);
          state.idList[newMsg.id] = true;
          console.log('Message loaded');
        } else {
          console.log('Message ID conflict - message already exists');
        }
      } else {
        console.log('Timestamp issue with message');
      }
    },
  },
});

export const { loadMessages, loadOneNew } = messagesSlice.actions;

export default messagesSlice.reducer;
