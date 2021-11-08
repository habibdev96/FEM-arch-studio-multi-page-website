import styled from 'styled-components';
import Image from 'next/image';
import { ICarouselData } from '../../interfaces';
import { MainHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import Button from '../shared/Button';
import { media } from '../../abstracts/Responsive';

const StyledArticle = styled.article`
  .bg {
    position: relative;
    width: 100%;
    height: 80vh;

    ${media.md} {
      height: 70vh;
    }

    ${media.sm} {
      height: 50vh;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .info {
    position: absolute;
    width: 50%;
    top: 10%;
    left: 15%;
    padding: 5rem;

    ${media.xl} {
      width: 75%;
      left: 5%;
      top: 5%;
    }

    ${media.md} {
      left: 0;
      top: 0;
    }
  }

  .heading,
  .desc {
    user-select: none;
  }

  .desc,
  .btn {
    ${media.sm} {
      display: none;
    }
  }
`;

const CarouselSlide = ({
  bg,
  title,
  description,
}: ICarouselData): JSX.Element => {
  return (
    <StyledArticle>
      <div className='bg'>
        <Image src={bg} alt={title} quality={100} layout='fill' />
      </div>
      <div className='info'>
        <MainHeading light={true} className='heading'>
          {title}
        </MainHeading>
        <Paragraph light={true} className='desc'>
          {description}
        </Paragraph>
        <div className='btn'>
          <Button path='/portfolio' text='See Our Portfolio' />
        </div>
      </div>
    </StyledArticle>
  );
};

export default CarouselSlide;
