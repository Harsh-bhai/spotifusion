import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const setup = set => ({
  accessToken: null,
  
  setAccessToken: (accessToken) => set({ accessToken }),

  removeAccessToken: () => {
    set({ accessToken: null });
    sessionStorage.removeItem("spotify");
  },
});

export const useSpotifyStore = create(
  persist(setup, {
    name: "spotify",
    storage: createJSONStorage(() => sessionStorage),
  })
);