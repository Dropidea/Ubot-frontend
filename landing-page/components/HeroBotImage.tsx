import Image from 'next/image';
import BaseBot from '../SVGs/Hero/BaseBot.svg';
import Bot from '../SVGs/Hero/Bot.svg';
import styles from '../styles/index.module.scss';
const HeroBotImage = () => {
  return (
    <>
      {/* <Image src={BaseBot} alt=" Base " /> */}
      <div className={styles.botImage}>
        <div className={styles.botImage__bot}>
          <Image src={Bot} alt="bot image" />
        </div>
        <div className={styles.botImage__base}>
          <Image src={BaseBot} alt="bot image" />
        </div>
      </div>
    </>
  );
};

export default HeroBotImage;
