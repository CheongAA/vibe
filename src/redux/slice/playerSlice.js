import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSong: 'test',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
    },
  },
});

export const { setActiveSong } = playerSlice.actions;

export default playerSlice.reducer;
