import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/logolight.svg';
import { flexAlign, flexBetween, maxWidthMd } from '../../abstracts/Mixins';
import Button from './Button';
import StyledLink from '../styledElements/Link.styled';
import { useGlobalState } from '../../context';

const Container = styled.div`
  ${maxWidthMd}
  ${flexBetween}
  margin: 10rem auto;
  background-color: var(--veryLightGrey);

  .left {
    ${flexAlign}
  }

  .logo {
    padding: 5rem;
    background-color: var(--veryDarkBlue);
  }

  .links {
    ${flexAlign}
  }

  .right {
    transform: translateX(10rem);
  }
`;

const Footer: React.FC = () => {
  const { links } = useGlobalState();

  return (
    <footer>
      <Container>
        <div className='left'>
          <div className='logo'>
            <Image src={logo} alt='arch logo' />
          </div>
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.path} passHref>
                  <StyledLink>{link.text}</StyledLink>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='right'>
          <Button path='/portfolio' text='See Our Portfolio' />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
