import Link from 'next/link';
import styles from '../styles/index.module.scss';

const NavItem = ({ dest, children }) => {
  return (
    <li className={styles.nav__ul__li}>
      <Link href={dest}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default NavItem;
