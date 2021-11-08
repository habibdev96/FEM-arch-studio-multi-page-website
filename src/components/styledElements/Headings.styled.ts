import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import { media } from '../../abstracts/Responsive';

export const MainHeading = styled.h1<{ light: boolean }>`
  ${headingStyles}
  font-size: 8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--veryDaryBlue)')};

  ${media.md} {
    font-size: 4.8rem;
  }

  ${media.sm} {
    font-size: 3.2rem;
  }
`;

export const SectionHeading = styled.h2<{ light: boolean }>`
  ${headingStyles}
  font-size: 5.6rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--veryDaryBlue)')};

  ${media.md} {
    font-size: 4rem;
  }
`;

export const BannerHeading = styled.h2`
  ${headingStyles}
  font-size: 20rem;
  user-select: none;
  color: var(--veryLightGrey);

  ${media.xl} {
    font-size: 10rem;
  }

  ${media.sm} {
    font-size: 5rem;
  }
`;

export const CardHeading = styled.h3<{ light: boolean }>`
  ${headingStyles}
  font-size: 1.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--veryDaryBlue)')};
`;
