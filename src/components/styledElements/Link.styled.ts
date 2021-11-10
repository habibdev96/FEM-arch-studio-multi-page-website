import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

const StyledLink = styled.a<{ mobile: boolean }>`
  ${headingStyles}
  font-size: ${({ mobile }) => (mobile ? '2.2rem' : '1.5rem')};
  cursor: pointer;
  color: var(--mediumGrey);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    color: var(--veryDarkBlue);
  }
`;

export default StyledLink;
