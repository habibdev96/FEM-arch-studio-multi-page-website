import carouselSlideImageOne from '../public/assets/home/desktop/image-hero-paramour.jpg';
import carouselSlideImageTwo from '../public/assets/home/desktop/image-hero-seraph.jpg';
import carouselSlideImageThree from '../public/assets/home/desktop/image-hero-federal.jpg';
import carouselSlideImageFour from '../public/assets/home/desktop/image-hero-trinity.jpg';

import portfolioCardImageOne from '../public/assets/portfolio/desktop/image-seraph.jpg';
import portfolioCardImageTwo from '../public/assets/portfolio/desktop/image-seraph.jpg';
import portfolioCardImageThree from '../public/assets/portfolio/desktop/image-federal.jpg';
import portfolioCardImageFour from '../public/assets/portfolio/desktop/image-del-sol.jpg';
import portfolioCardImageFive from '../public/assets/portfolio/desktop/image-prototype.jpg';
import portfolioCardImageSix from '../public/assets/portfolio/desktop/image-228b.jpg';
import portfolioCardImageSeven from '../public/assets/portfolio/desktop/image-edelweiss.jpg';
import portfolioCardImageEight from '../public/assets/portfolio/desktop/image-netcry.jpg';
import portfolioCardImageNine from '../public/assets/portfolio/desktop/image-hypers.jpg';
import portfolioCardImageTen from '../public/assets/portfolio/desktop/image-sxiv.jpg';
import portfolioCardImageEleven from '../public/assets/portfolio/desktop/image-trinity.jpg';
import portfolioCardImageTwelve from '../public/assets/portfolio/desktop/image-paramour.jpg';

export const linksData = [
  { id: 1, text: 'Portfolio', path: '/portfolio' },
  { id: 2, text: 'About Us', path: '/about' },
  { id: 3, text: 'Contact', path: '/contact' },
];

export const carouselData = [
  {
    id: 1,
    bg: carouselSlideImageOne,
    title: 'Project Paramour',
    description:
      'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
  },
  {
    id: 2,
    bg: carouselSlideImageTwo,
    title: 'Seraph Station',
    description:
      'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
  },
  {
    id: 3,
    bg: carouselSlideImageThree,
    title: 'Federal II Tower',
    description:
      'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
  },
  {
    id: 4,
    bg: carouselSlideImageFour,
    title: 'Trinity Bank Tower',
    description:
      'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
  },
];

export const portfolioCardData = [
  {
    id: 1,
    bg: portfolioCardImageOne,
    title: 'Seraph Station',
    date: 'September 2019',
    isFeatured: false,
  },
  {
    id: 2,
    bg: portfolioCardImageTwo,
    title: 'Eebox Building',
    date: 'August 2017',
    isFeatured: false,
  },
  {
    id: 3,
    bg: portfolioCardImageThree,
    title: 'Federal II Tower',
    date: 'March 2017',
    isFeatured: false,
  },
  {
    id: 4,
    bg: portfolioCardImageFour,
    title: 'Project Del Sol',
    date: 'March 2017',
    isFeatured: true,
    featureNumber: '1',
  },
  {
    id: 5,
    bg: portfolioCardImageFive,
    title: 'Le Prototype',
    date: 'October 2015',
    isFeatured: true,
    featureNumber: '2',
  },
  {
    id: 6,
    bg: portfolioCardImageSix,
    title: '228B Tower',
    date: 'April 2015',
    isFeatured: true,
    featureNumber: '3',
  },
  {
    id: 7,
    bg: portfolioCardImageSeven,
    title: 'Grand Edelweiss Hotel',
    date: 'December 2013',
    isFeatured: false,
  },
  {
    id: 8,
    bg: portfolioCardImageEight,
    title: 'Netcry Tower',
    date: 'August 2012',
    isFeatured: false,
  },
  {
    id: 9,
    bg: portfolioCardImageNine,
    title: 'Hypers',
    date: 'January 2012',
    isFeatured: false,
  },
  {
    id: 10,
    bg: portfolioCardImageTen,
    title: 'SXIV Tower',
    date: 'March 2011',
    isFeatured: false,
  },
  {
    id: 11,
    bg: portfolioCardImageEleven,
    title: 'Trinity Bank Tower',
    date: 'September 2010',
    isFeatured: false,
  },
  {
    id: 12,
    bg: portfolioCardImageTwelve,
    title: 'Project Paramour',
    date: 'February 2008',
    isFeatured: false,
  },
];
