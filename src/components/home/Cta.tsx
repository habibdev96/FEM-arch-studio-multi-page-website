import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import { SectionHeading } from '../styledElements/Headings.styled';
import Button from '../shared/Button';
import bg from '../../../public/assets/home/desktop/image-small-team.jpg';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  position: relative;

  .bg {
    position: relative;
    width: 100%;
    height: 50vh;

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
    top: 25%;
    left: 15%;
    padding: 5rem;
  }
`;
const Cta: React.FC = () => {
  return (
    <section>
      <Container>
        <div className='bg'>
          <Image
            src={bg}
            alt='house on the water'
            quality={100}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='info'>
          <SectionHeading light={true}>
            Small team, <br /> big ideas
          </SectionHeading>
          <Button path='/about' text='About Us' />
        </div>
      </Container>
    </section>
  );
};

export default Cta;
