import { useContext } from 'react';
import HomeComponent from '../components/HomeComponent';
import ThemeProvider from '../Context/ThemeContext';
import { ThemeContext } from '../Context/ThemeContext';
export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
      <HomeComponent />
    </main>
  );
}
