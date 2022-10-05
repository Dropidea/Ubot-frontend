import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <ul className="nav__ul_pages">
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
      </ul>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme}
      </button>
    </>
  );
};

export default Navbar;
