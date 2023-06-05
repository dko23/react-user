import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  details: [
    { id: uuidv4(), name: "Goku", email: 'danielowusu326@hotmail.co.uk', gen: 24 },
    { id: uuidv4(), name: "Vegeta", email: 'james24@hotmail.co.uk', gen: 24 },
    { id: uuidv4(), name: "Piccolo", email: 'james24@hotmail.co.uk', gen: 24 },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.details.push(action.payload);
    },
    // Add other reducers if needed
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
