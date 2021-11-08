import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import { maxWidthLg, sectionSpacingMd, twoCol } from '../../abstracts/Mixins';
import SingleLeader from './SingleLeader';
import { useGlobalState } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${twoCol}
  align-items: flex-start;

  .leaders {
    ${twoCol}
  }
`;

const LeadersSection = (): JSX.Element => {
  const { leaders } = useGlobalState();

  return (
    <section>
      <Container>
        <SectionHeading light={false}>The Leaders</SectionHeading>
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
