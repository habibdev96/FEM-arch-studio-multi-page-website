import type { NextPage } from 'next';
import Head from 'next/head';
import PortfolioCards from '../components/portfolio/PortfolioCards';

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arch Studio | Our Portfolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PortfolioCards />
      </main>
    </>
  );
};

export default Portfolio;
