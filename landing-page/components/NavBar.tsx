import NavItems from './NavItems';
import style from '../styles/index.module.scss';
import NavButtons from './NavButtons';
import NavLogo from './NavLogo';
import NavMobile from './NavMobile';

export const NavBar = () => {
  return (
    <nav className={style.nav}>
      <NavMobile />
      <NavLogo />
      <NavItems />
      <NavButtons />
    </nav>
  );
};
export default NavBar;
