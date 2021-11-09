import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import ContactForm from './ContactForm';
import { media } from '../../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: var(--gap);

  ${media.lg} {
    text-align: center;
    grid-template-columns: 1fr;
  }
`;

const ContactFormSection = (): JSX.Element => {
  return (
    <section>
      <Container>
        <SectionHeading light={false}>Connect with us</SectionHeading>
        <ContactForm />
      </Container>
    </section>
  );
};

export default ContactFormSection;
