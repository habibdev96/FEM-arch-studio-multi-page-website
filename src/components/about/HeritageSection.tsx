import styled from 'styled-components';
import Image from 'next/image';
import { SectionHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import StyledUnderline from '../styledElements/Underline.styled';
import showcase from '../../../public/assets/about/desktop/image-heritage.jpg';
import { maxWidthLg, sectionSpacingMd, twoCol } from '../../abstracts/Mixins';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${twoCol}
  align-items: flex-start;
`;

const HeritageSection = (): JSX.Element => {
  return (
    <section>
      <Container>
        <div className='info'>
          <StyledUnderline />
          <SectionHeading light={false}>Our Heritage</SectionHeading>
          <Paragraph light={false}>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </Paragraph>
          <Paragraph light={false}>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </Paragraph>
          <Paragraph light={false}>
            Our small team of world-class professionals provides input on every
            project.
          </Paragraph>
        </div>
        <div className='showcase'>
          <Image src={showcase} alt='closeup of building' />
        </div>
      </Container>
    </section>
  );
};

export default HeritageSection;
