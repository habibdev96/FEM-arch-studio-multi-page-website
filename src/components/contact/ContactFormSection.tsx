import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import ContactForm from './ContactForm';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--gap);
`;

const ContactFormSection = (): JSX.Element => {
  return (
    <section>
      <Container>
        <SectionHeading light={false}>
          Connect <br /> with us
        </SectionHeading>
        <ContactForm />
      </Container>
    </section>
  );
};

export default ContactFormSection;
