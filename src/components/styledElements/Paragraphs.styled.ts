import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p`
  ${textStyles}
  font-size: 1.5rem;
  color: var(--white);
  padding: 1rem 0;
`;

export default Paragraph;
