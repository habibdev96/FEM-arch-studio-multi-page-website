import styled from 'styled-components';
import Image from 'next/image';
import { CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { IPortfolioCardData } from '../../interfaces';

const StyledArticle = styled.article`
  position: relative;

  .feature-number {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    color: var(--veryDarkBlue);
    font-size: 20rem;
  }

  .info {
    position: absolute;
    bottom: -2rem;
    padding: 5rem;
    background-color: var(--veryDarkBlue);
  }
`;

const PortfolioCard = ({
  bg,
  title,
  date,
  isFeatured,
  featureNumber,
}: IPortfolioCardData): JSX.Element => {
  return (
    <StyledArticle>
      {isFeatured && <h2 className='feature-number'>{featureNumber}</h2>}
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
