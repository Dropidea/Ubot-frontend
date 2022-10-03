import HomeComponent from '../components/HomeComponent';
import ThemeProvider from '../Context/ThemeContext';
export default function Home() {
  return (
    <ThemeProvider>
      <HomeComponent />
    </ThemeProvider>
  );
}
