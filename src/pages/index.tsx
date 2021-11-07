import type { NextPage } from 'next';
import Head from 'next/head';
import HomeCarousel from '../components/home/HomeCarousel';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arch Studio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeCarousel />
    </>
  );
};

export default Home;
