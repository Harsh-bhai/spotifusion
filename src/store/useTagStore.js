import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const setup = (set) => ({
  tagMap: {}, // Initialize with an empty object
  setTagMap: (tagMap) => set({ tagMap }),

  playListTagArray: [],
  setplayListTagArray: (playListTagArray) => set({ playListTagArray }),

  tagSongIdMap: {},
  setTagSongIdMap : (tagSongIdMap) => set({ tagSongIdMap }),
})

export const useTagStore = create(
  persist(setup, {
    name: "tag",
    storage: createJSONStorage(() => localStorage),
  })
);
