import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
    name: "playlist",
    initialState: {
        playlists: [],
        currPlaylist: null,
    },
    reducers: {
        setPlaylists: (state, action) => {
            state.playlists = action.payload
        },
        setCurrPlaylist: (state, action) => {
            state.currPlaylist = action.payload
        },
    },
});

export const { setPlaylists, setCurrPlaylist } = playlistSlice.actions
export default playlistSlice.reducer