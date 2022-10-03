import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
const HomeComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="app">
      <h1 className=" text ">Welcome to Total Bot!</h1>
      <article className=" text wrapper ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, libero
        saepe, deleniti iusto doloremque animi ullam cum, dolorem quam
        consequatur non at harum mollitia repellat similique blanditiis error
        rerum. Ipsa!
      </article>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'DarkMode' : 'LightMode'}
      </button>
    </div>
  );
};

export default HomeComponent;
