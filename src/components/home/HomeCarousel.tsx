import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { maxWidthLg } from '../../abstracts/Mixins';
import CarouselSlide from './CarouselSlide';
import { useGlobalState } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const HomeCarousel = (): JSX.Element => {
  const { carouselSlides } = useGlobalState();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
      centerMode: true,
    },
  };

  return (
    <header>
      <Container>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          transitionDuration={1000}
          containerClass='carousel-container'
          itemClass='carouse-item'
        >
          {carouselSlides.map((slide) => (
            <CarouselSlide key={slide.id} {...slide} />
          ))}
        </Carousel>
      </Container>
    </header>
  );
};

export default HomeCarousel;
