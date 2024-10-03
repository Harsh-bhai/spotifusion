import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const setup = (set, get) =>({
    playlists: [],
    setPlaylists: (playlists) => set({playlists}),
    currPlaylist: null,
    setCurrPlaylist: (currPlaylist) => set({currPlaylist}),
})

export const usePlaylistStore = create(
    persist(setup, {
        name: "playlist",
        storage: createJSONStorage(() => sessionStorage),
    })
)