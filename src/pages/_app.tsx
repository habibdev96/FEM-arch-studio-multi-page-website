import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';
import { GlobalStateProvider } from '../context';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStateProvider>
        <Globals />
        <Component {...pageProps} />
      </GlobalStateProvider>
    </>
  );
};

export default App;
