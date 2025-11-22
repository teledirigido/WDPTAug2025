import { createContext, useState } from "react";

// 1. First thing is to create the context
export const ThemeContext = createContext();

// 2. We create a provider
export function ThemeProvider({ children }) {

  // 2.1 We add some logic
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }
  const myVariable = 'Foo is my variable';
  
  // 2.2 We return
  return (
    // Always add <NameOfYourContext>.Provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}