import styled from 'styled-components';
import Image from 'next/image';
import { CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { IPortfolioCardData } from '../../interfaces';

const StyledArticle = styled.article`
  position: relative;
  cursor: pointer;
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    opacity: 0.9;
  }

  .feature-number {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    color: var(--error);
    font-size: 20rem;
  }

  .info {
    position: absolute;
    bottom: 0.1rem;
    width: 100%;
    padding: 2rem;
    background-color: var(--veryDarkBlue);
  }
`;

const PortfolioCard = ({
  bg,
  title,
  date,
  featureNumber,
}: IPortfolioCardData): JSX.Element => {
  return (
    <StyledArticle>
      <h2 className='feature-number'>{featureNumber}</h2>
      <div className='bg'>
        <Image src={bg} alt={title} objectFit='cover' objectPosition='center' />
      </div>
      <div className='info'>
        <CardHeading light={true}>{title}</CardHeading>
        <Paragraph light={true}>{date}</Paragraph>
      </div>
    </StyledArticle>
  );
};

export default PortfolioCard;
