import styles from '../styles/index.module.scss';

const Button = ({ trc, children }) => {
  return (
    <button
      className={trc ? styles.nav__Buttons__trc : styles.nav__Buttons__ntrc}
    >
      {children}
    </button>
  );
};

export default Button;
