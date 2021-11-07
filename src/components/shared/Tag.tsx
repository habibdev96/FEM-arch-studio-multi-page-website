import styled from 'styled-components';
import Image from 'next/image';
import { textStyles, headingStyles } from '../../abstracts/Mixins';
import logo from '../../../public/assets/tag/habibdevgif.gif';

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem;

  .heading {
    ${textStyles};
    color: var(--darkGrey);
    text-align: center;
    font-size: var(--xxs);
  }

  .link {
    ${headingStyles};
    color: var(--veryDarkBlue);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .tag-logo {
    width: 5rem;
  }
`;

const Tag = (): JSX.Element => {
  return (
    <StyledTag>
      <h3 className='heading'>
        project for{' '}
        <a
          href='https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          frontend mentor
        </a>{' '}
        coded by{' '}
        <a
          href='https://github.com/habibdev96'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          habibdev{' '}
        </a>
      </h3>
      <div className='tag-logo'>
        <Image src={logo} alt='logo' />
      </div>
    </StyledTag>
  );
};

export default Tag;
