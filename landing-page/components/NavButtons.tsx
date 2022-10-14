import styles from '../styles/index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import Button from './Button';

const NavButtons = () => {
  return (
    <div className={styles.nav__Buttons}>
      <Button trc={true}>Login</Button>
      <Button trc={false}>Get Started</Button>
      {/* Icon */}
      <FontAwesomeIcon icon={faGlobe} style={{ color: 'white' }} />
    </div>
  );
};

export default NavButtons;
