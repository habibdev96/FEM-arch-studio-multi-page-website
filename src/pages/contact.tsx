import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHero from '../components/shared/SectionHero';
import ContactDetails from '../components/contact/ContactDetails';
import showcase from '../../public/assets/contact/desktop/image-hero.jpg';
import { ISectionHeroProps } from '../interfaces';

const ContactHeroContent: ISectionHeroProps = {
  showcase: showcase,
  heading: 'Contact',
  title: 'Tell us about your project',
  description:
    'We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!',
};

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arch Studio | Contact Us</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SectionHero
        showcase={ContactHeroContent.showcase}
        heading={ContactHeroContent.heading}
        title={ContactHeroContent.title}
        description={ContactHeroContent.description}
      />
      <main>
        <ContactDetails />
      </main>
    </>
  );
};

export default Contact;
