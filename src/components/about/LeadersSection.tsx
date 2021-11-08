import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import { maxWidthLg, sectionSpacingMd, twoCol } from '../../abstracts/Mixins';
import SingleLeader from './SingleLeader';
import { media } from '../../abstracts/Responsive';
import { useGlobalState } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${twoCol}
  grid-template-columns: 1fr 2fr;
  align-items: flex-start;

  ${media.sm} {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .heading {
    position: sticky;
    top: 2rem;

    ${media.sm} {
      position: static;
      top: 0;
    }
  }

  .leaders {
    ${twoCol}
  }
`;

const LeadersSection = (): JSX.Element => {
  const { leaders } = useGlobalState();

  return (
    <section>
      <Container>
        <div className='heading'>
          <SectionHeading light={false}>The Leaders</SectionHeading>
        </div>
        <div className='leaders'>
          {leaders.map((lead) => (
            <SingleLeader key={lead.id} {...lead} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LeadersSection;
