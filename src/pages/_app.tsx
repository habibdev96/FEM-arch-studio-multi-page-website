import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';
import { GlobalStateProvider } from '../context';
import Navbar from '../components/shared/Navbar';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStateProvider>
        <Globals />
        <Navbar />
        <Component {...pageProps} />
      </GlobalStateProvider>
    </>
  );
};

export default App;
