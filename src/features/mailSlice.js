import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectmMail: null,
    sendMessageIsOpen:false,
  },
  reducers: {
    selesctMail:(state, action) => {
      state.selectmMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;
export const selectOpenMail = (state) => state.mail.selectMail;
export const selectsendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
