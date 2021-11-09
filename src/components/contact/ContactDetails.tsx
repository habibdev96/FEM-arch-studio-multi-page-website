import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import StyledUnderline from '../styledElements/Underline.styled';
import {
  maxWidthLg,
  sectionSpacingMd,
  headingStyles,
  textStyles,
  flexAlign,
} from '../../abstracts/Mixins';
import { FaArrowRight } from 'react-icons/fa';
import { media } from '../../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;

  ${media.md} {
    grid-template-columns: 1fr;
  }

  .contact {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    flex-direction: column;
  }

  h4 {
    ${headingStyles}
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--darkGrey);
  }

  small {
    ${textStyles}
    font-size: 1.3rem;
    color: var(--mediumGrey);
  }

  .view {
    ${flexAlign}
    gap: 1rem;
    margin-top: 2rem;
    color: var(--veryDarkBlue);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  span {
    ${headingStyles}
    font-size: 1.5rem;
  }

  .icon {
    font-size: var(--xxs);
  }
`;

const ContactDetails = (): JSX.Element => {
  return (
    <section>
      <Container>
        <div>
          <StyledUnderline />
          <SectionHeading light={false}>Contact Details</SectionHeading>
        </div>
        <div className='contact'>
          <h4>Main Office</h4>
          <small>Mail: archone@gmail.com</small>
          <small>Address: 1892 Chenoweth Drive TN</small>
          <small>Phone: 123-456-3451</small>
          <a href='#!' className='view'>
            <span>View on Map</span>
            <FaArrowRight className='icon' />
          </a>
        </div>
        <div className='contact'>
          <h4>Office II</h4>
          <small>Mail: archtwo@gmail.com</small>
          <small>Address: 3399 Wanes Lane TX</small>
          <small>Phone: 832-123-4342</small>
          <a href='#!' className='view'>
            <span>View on Map</span>
            <FaArrowRight className='icon' />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ContactDetails;
