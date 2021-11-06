import type { NextPage } from 'next';
import Head from 'next/head';
import { useGlobalState } from '../context';

const Home: NextPage = () => {
  const { data } = useGlobalState();

  return (
    <>
      <Head>
        <title>Arch Studio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};

export default Home;
