import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./slices/spotifySlice";
import playlistReducer from "./slices/playlistSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        spotify: spotifyReducer,
        playlist: playlistReducer,
        theme: themeReducer
    },
})