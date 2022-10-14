import NavItem from './NavItem';
import styles from '../styles/index.module.scss';
function NavItems() {
  return (
    <ul className={styles.nav__ul}>
      <NavItem dest="/features">Features</NavItem>
      <NavItem dest="/howtouse">HowToUse</NavItem>
      <NavItem dest="/">Plans</NavItem>
      <NavItem dest="/">Integrations</NavItem>
    </ul>
  );
}

export default NavItems;
