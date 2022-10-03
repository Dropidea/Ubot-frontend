import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
const HomeComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme}{' '}
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {' '}
        Convert{' '}
      </button>
    </div>
  );
};

export default HomeComponent;
