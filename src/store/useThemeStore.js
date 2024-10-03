import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const setup = set => ({
    theme : "dark", 
    setTheme: (theme) => set({theme}),
});

export const useThemeStore = create(
    persist(setup, {
        name: "theme", 
        storage: createJSONStorage(()=> localStorage)
    })
)