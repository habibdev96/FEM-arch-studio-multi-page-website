import styled from 'styled-components';
import Image from 'next/image';
import { ICarouselData } from '../../interfaces';
import { MainHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import Button from '../shared/Button';

const StyledArticle = styled.article`
  .bg {
    position: relative;
    width: 100%;
    height: 80vh;

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
        <Image
          src={bg}
          alt={title}
          quality={100}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <div className='info'>
        <MainHeading style={{ userSelect: 'none' }}>{title}</MainHeading>
        <Paragraph light={true} style={{ userSelect: 'none' }}>
          {description}
        </Paragraph>
        <Button path='/portfolio' text='See Our Portfolio' />
      </div>
    </StyledArticle>
  );
};

export default CarouselSlide;
