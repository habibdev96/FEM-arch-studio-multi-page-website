import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import StyledLink from '../styledElements/Link.styled';
import MobileMenuToggler from './MobileMenuToggler';
import logo from '../../../public/assets/logo.svg';
import { flexBetween, maxWidthLg, flexAlign } from '../../abstracts/Mixins';
import { media } from '../../abstracts/Responsive';
import { useGlobalState } from '../../context';

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 3000;
  background-color: var(--white);
`;

const Container = styled.div`
  ${flexBetween}
  ${maxWidthLg}
  padding: 2rem 2rem;

  .left {
    ${flexAlign}
  }

  .logo {
    width: 15rem;
    cursor: pointer;
  }

  .links {
    ${flexAlign}

    ${media.md} {
      display: none;
    }
  }
`;

const Navbar = (): JSX.Element => {
  const { links, handleMobileMenuClose } = useGlobalState();

  return (
    <StyledNav>
      <Container>
        <div className='left'>
          <Link href='/'>
            <div className='logo' onClick={handleMobileMenuClose}>
              <Image src={logo} alt='arch logo' />
            </div>
          </Link>
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.path} passHref>
                  <StyledLink mobile={false}>{link.text}</StyledLink>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <MobileMenuToggler />
      </Container>
    </StyledNav>
  );
};

export default Navbar;
