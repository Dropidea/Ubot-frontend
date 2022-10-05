import Navbar from './Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={theme === 'dark' ? 'dark' : ''}>
        <>
          <nav>
            <Navbar />
          </nav>
          {children}
        </>
      </main>
    </>
  );
};

export default Layout;
