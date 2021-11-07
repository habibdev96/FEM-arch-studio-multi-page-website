import type { NextPage } from 'next';
import Head from 'next/head';
import HomeCarousel from '../components/home/HomeCarousel';
import WelcomeSection from '../components/home/WelcomeSection';
import Cta from '../components/home/Cta';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arch Studio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeCarousel />
      <main>
        <WelcomeSection />
        <Cta />
      </main>
    </>
  );
};

export default Home;
