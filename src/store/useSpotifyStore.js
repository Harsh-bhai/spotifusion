import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const setup = (set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  removeAccessToken: () =>
    new Promise((resolve) => {
      set({ accessToken: null });
      resolve(); // Resolve the promise after the state is set
    }),
  spotifyId: null,
  setSpotifyId: (spotifyId) => set({ spotifyId }),
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
});

export const useSpotifyStore = create(
  persist(setup, {
    name: "spotify",
    storage: createJSONStorage(() => localStorage),
  })
);
