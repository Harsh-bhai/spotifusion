import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
    name: "playlist",
    initialState: {
        currPlayListId: "",
        playlists: [],
        currPlaylist: null,
    },
    reducers: {
        setCurrPlayListId: (state, action) => {
            state.currPlayListId = action.payload
        },
        setPlaylists: (state, action) => {
            state.playlists = action.payload
        },
        setCurrPlaylist: (state, action) => {
            state.currPlaylist = action.payload
        },
    },
});

export const { setCurrPlayListId, setPlaylists, setCurrPlaylist } = playlistSlice.actions
export default playlistSlice.reducer