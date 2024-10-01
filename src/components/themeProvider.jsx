"use client";
import { useSelector } from 'react-redux';
const ThemeProvider = ({ children }) => {
    const { theme } = useSelector(state => state.theme);
    console.log(theme, "theme");
    
  
    return (
      <div data-theme={`${theme}`}>
        {children}
      </div>
    );
  };

  export default ThemeProvider