import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const setup = set => ({
  artistsArr: [],
  setArtistsArr: (artistsArr) => set({ artistsArr }),

  songids: [],
  setSongids: (songids) => set({ songids })
});

export const useRecomendStore = create(
  persist(setup, {
    name: "recomend",
    storage: createJSONStorage(() => localStorage),
  })
)