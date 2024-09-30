import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./slices/spotifySlice";
import playlistReducer from "./slices/playlistSlice";

export const store = configureStore({
    reducer: {
        spotify: spotifyReducer,
        playlist: playlistReducer,
    },
})