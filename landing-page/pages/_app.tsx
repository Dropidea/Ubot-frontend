// Font icons Confige
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; //Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import './../styles/global.scss';
import styles from '../styles/index.module.scss';

import Layout from '../components/Layout';
import ThemeProvider from '../Context/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* Main container Here because I need the layout inside container Also */}
      <main className={styles.container}>
        <Layout />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
