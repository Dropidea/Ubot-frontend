import Navbar from './Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import styles from '../../styles/index.module.scss';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={theme === 'dark' ? 'dark' : ''}>
        <>
          <nav className={styles.hdr}>
            <Navbar />
          </nav>
          {children}
        </>
      </main>
    </>
  );
};

export default Layout;
