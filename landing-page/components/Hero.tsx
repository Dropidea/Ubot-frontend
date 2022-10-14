import Image from 'next/image';
import styles from '../styles/index.module.scss';
import Button from './Button';
import HeroBotImage from './HeroBotImage';
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__left}>
        <div className={styles.hero__left__header}>
          <h1>
            Business is <span> Easy </span> easy with our{' '}
            <span> chatboot builder </span>
          </h1>
        </div>

        <div className={styles.hero__left__desc}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at
            esse sed saepe laboriosam dignissimos explicabo nihil cum eligendi
            autem blanditiis laborum est, libero in? Dolore maiores numquam
            facilis in!
          </p>
        </div>

        <div className={styles.hero__left__buttons}>
          <Button trc={false}>Get Started</Button>
          <Button trc={true}>How To Use</Button>
        </div>
      </div>

      <div className={styles.hero__right}>
        <HeroBotImage />
      </div>
    </section>
  );
};

export default Hero;
