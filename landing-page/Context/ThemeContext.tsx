// Make Global Context for Dark / Light Mode.
import { useEffect, useState } from 'react';
import { createContext } from 'react';

interface Theme {
  theme: string;
  setTheme: (newVlaue) => void;
}

//The init Context value must be null , after the the provider will inject the value.
export const ThemeContext = createContext<Theme | null>(null);

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    //if the user have theme in localstorge then ok , else make it light

    let initialState =
      JSON.parse(window.localStorage.getItem('theme') as string) || 'light';

    //the global state for access it from app.
    setTheme(initialState);
  }, []);

  const [theme, setTheme] = useState<string>('');

  //If the state change , change it in localstorge also
  useEffect(() => {
    //in init reneder this code will run (Look '21' line) , so Do Nothing!
    if (!theme) return;

    //Wher user convert the mode
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
