"use client";
import { useThemeStore } from '@/store/useThemeStore';
const ThemeProvider = ({ children }) => {
    const { theme } = useThemeStore();
  
    return (
      <div data-theme={`${theme}`}>
        {children}
      </div>
    );
  };

  export default ThemeProvider