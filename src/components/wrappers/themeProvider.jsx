"use client";
import { useThemeStore } from '@/store/useThemeStore';
const ThemeProvider = ({ children }) => {
    const { theme } = useThemeStore();
    console.log(theme, "theme");
    
  
    return (
      <div data-theme={`${theme}`}>
        {children}
      </div>
    );
  };

  export default ThemeProvider