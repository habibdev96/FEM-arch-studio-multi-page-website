import styled from 'styled-components';
import PortfolioCard from '../shared/PortfolioCard';
import { maxWidthLg, sectionSpacingMd, threeCol } from '../../abstracts/Mixins';
import { useGlobalState } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${threeCol}
  padding-top: 15rem;
`;

const PortfolioCards = (): JSX.Element => {
  const { portfolioCards } = useGlobalState();

  return (
    <section>
      <Container>
        {portfolioCards.map((card) => (
          <PortfolioCard key={card.id} {...card} />
        ))}
      </Container>
    </section>
  );
};

export default PortfolioCards;
