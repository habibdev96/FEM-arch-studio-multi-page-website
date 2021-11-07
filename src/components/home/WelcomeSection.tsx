import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  BannerHeading,
  SectionHeading,
} from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { twoCol, maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import img from '../../../public/assets/home/desktop/image-welcome.jpg';

const StyledSection = styled.section`
  position: relative;
`;

const Container = styled.div`
  ${twoCol}
  ${maxWidthLg}
  ${sectionSpacingMd}

  .info {
    position: relative;
    z-index: 10;
  }

  .showcase {
    display: flex;
    justify-content: center;
  }
`;

const WelcomeSection: React.FC = () => {
  return (
    <StyledSection>
      <BannerHeading>Welcome</BannerHeading>
      <Container>
        <div className='info'>
          <SectionHeading light={false}>Welcome to Arch Studio</SectionHeading>
          <Paragraph light={false}>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </Paragraph>
          <Paragraph light={false}>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </Paragraph>
          <Paragraph light={false}>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </Paragraph>
        </div>
        <div className='showcase'>
          <Image src={img} alt='building showcase' />
        </div>
      </Container>
    </StyledSection>
  );
};

export default WelcomeSection;
