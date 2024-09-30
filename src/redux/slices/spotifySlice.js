import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = spotifySlice.actions;
export default spotifySlice.reducer;
