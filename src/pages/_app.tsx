import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';
import { GlobalStateProvider } from '../context';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStateProvider>
        <Globals />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GlobalStateProvider>
    </>
  );
};

export default App;
