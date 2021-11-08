import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHero from '../components/shared/SectionHero';
import HeritageSection from '../components/about/HeritageSection';
import showcase from '../../public/assets/about/desktop/image-hero.jpg';
import { ISectionHeroProps } from '../interfaces';

const aboutHeroContent: ISectionHeroProps = {
  showcase: showcase,
  heading: 'About',
  title: 'Your team of professionals',
  description:
    'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.',
};

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arch Studio | About Us</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SectionHero
        showcase={aboutHeroContent.showcase}
        heading={aboutHeroContent.heading}
        title={aboutHeroContent.title}
        description={aboutHeroContent.description}
      />
      <main>
        <HeritageSection />
      </main>
    </>
  );
};

export default About;
