import styled from 'styled-components';
import Image from 'next/image';
import { BannerHeading, MainHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { maxWidthLg, sectionSpacingMd, twoCol } from '../../abstracts/Mixins';
import StyledUnderline from '../styledElements/Underline.styled';
import { ISectionHeroProps } from '../../interfaces';
import { media } from '../../abstracts/Responsive';

const StyledHeader = styled.header`
  position: relative;
  padding-top: 15rem;

  .banner {
    position: absolute;
    z-index: 15;
    top: 20%;
    right: 20%;

    ${media.md} {
      display: none;
    }
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${twoCol}
  align-items: flex-end;

  .showcase {
    transform: translateX(5rem);

    ${media.md} {
      transform: translateX(0);
    }
  }

  .info {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    padding: 5rem 0 5rem 5rem;
    background-color: var(--white);
    transform: translateX(-20rem);

    ${media.md} {
      transform: translateX(0);
      order: -1;
      height: 100%;
      padding: 0;
    }
  }
`;

const SectionHero = ({
  showcase,
  heading,
  title,
  description,
}: ISectionHeroProps): JSX.Element => {
  return (
    <StyledHeader>
      <div className='banner'>
        <BannerHeading>{heading}</BannerHeading>
      </div>
      <Container>
        <div className='showcase'>
          <Image src={showcase} alt='man typing on laptop' />
        </div>
        <div className='info'>
          <StyledUnderline />
          <MainHeading light={false}>{title}</MainHeading>
          <Paragraph light={false}>{description}</Paragraph>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default SectionHero;
