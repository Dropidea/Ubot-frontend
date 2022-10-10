import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavItems from '../NavItems/NavItems';
import styles from '../../styles/index.module.scss';

const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {/* <ul className="nav__ul_pages">
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/about'}>
          <li>About</li>
        </Link>
      </ul>
      <ul className="nav__ul_pages">
        {router.locales.map((l) => (
          <li key={l}>
            <Link href={router.asPath} locale={l}>
              {l}
            </Link>
          </li>
        ))}
      </ul> */}
      <div className={styles.header}>
        <div className={styles.logo}>
          Logo
        </div>
        <NavItems />
        <div className={styles.right}>
          <a href='/' className={styles.orange}>Login</a>
          <a href='/' className={styles.trans}>Get started</a>
          <a href='/' className={styles.lang}>Switch</a>
        </div>
      </div>
      {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme}
      </button> */}
    </>
  );
};

export default Navbar;
