import { createSlice } from "@reduxjs/toolkit";
import { chat_message_limit } from "./contants";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.message.length >= chat_message_limit) {
        state.message.shift(); // Remove the first message if the limit is reached
      }
      state.message.push(action.payload);
    },
  },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
