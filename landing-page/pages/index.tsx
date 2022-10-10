import { useContext } from 'react';
import HomeComponent from '../components/HomeComponent';
import ThemeProvider from '../Context/ThemeContext';
import { ThemeContext } from '../Context/ThemeContext';
import styles from '../styles/index.module.scss';
export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
      <HomeComponent />
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur facere nostrum dolor unde commodi. Beatae vero nobis voluptatem, voluptatibus possimus officia recusandae doloremque deleniti porro ea quis rerum asperiores quidem.
      </p>
    </main>
  );
}
