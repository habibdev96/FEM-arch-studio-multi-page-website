import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import Button from '../shared/Button';
import PortfolioCard from '../shared/PortfolioCard';
import {
  maxWidthLg,
  sectionSpacingMd,
  flexBetween,
  threeCol,
} from '../../abstracts/Mixins';
import { useGlobalState } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}

  .top {
    ${flexBetween}
    margin-bottom: 5rem;
  }

  .featured {
    ${threeCol}
  }
`;

const FeaturedSection: React.FC = () => {
  const { portfolioCards } = useGlobalState();

  return (
    <section>
      <Container>
        <div className='top'>
          <SectionHeading light={false}>Featured</SectionHeading>
          <Button path='/portfolio' text='See All' />
        </div>
        <div className='featured'>
          {portfolioCards.map((card) => {
            return card.isFeatured && <PortfolioCard key={card.id} {...card} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;
