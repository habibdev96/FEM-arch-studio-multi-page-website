import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';
import { GlobalStateProvider } from '../context';
import Navbar from '../components/shared/Navbar';
import MobileMenu from '../components/shared/MobileMenu';
import Footer from '../components/shared/Footer';
import Tag from '../components/shared/Tag';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStateProvider>
        <Globals />
        <Navbar />
        <MobileMenu />
        <Component {...pageProps} />
        <Footer />
        <Tag />
      </GlobalStateProvider>
    </>
  );
};

export default App;
