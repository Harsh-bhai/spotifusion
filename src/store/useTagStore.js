import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const setup = (set) => ({
  tagMap: {}, // Initialize with an empty object
  setTagMap: (newTagMap) => set((state) => ({
    tagMap: {
      ...state.tagMap,
      ...newTagMap,
    },
  })),

  playListTagArray: [],
  setplayListTagArray: (playListTagArray) => set({ playListTagArray }),

  tagSongIdMap: {},
  setTagSongIdMap : (tagSongIdMap) => set({ tagSongIdMap }),
})

export const useTagStore = create(
  persist(setup, {
    name: "tag",
    storage: createJSONStorage(() => sessionStorage),
  })
);
