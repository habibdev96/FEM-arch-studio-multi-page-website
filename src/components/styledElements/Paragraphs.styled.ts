import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p<{ light: boolean }>`
  ${textStyles}
  font-size: 1.5rem;
  padding: 1rem 0;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGrey)')};
`;

export default Paragraph;
