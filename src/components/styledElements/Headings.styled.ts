import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 8rem;
  color: var(--white);
`;

export const SectionHeading = styled.h2<{ light: boolean }>`
  ${headingStyles}
  font-size: 5.6rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--veryDaryBlue)')};
`;

export const BannerHeading = styled.h2`
  ${headingStyles}
  position: absolute;
  top: -12%;
  z-index: 5;
  font-size: 20rem;
  color: var(--veryLightGrey);
`;

export const CardHeading = styled.h3<{ light: boolean }>`
  ${headingStyles}
  font-size: 1.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--veryDaryBlue)')};
`;
