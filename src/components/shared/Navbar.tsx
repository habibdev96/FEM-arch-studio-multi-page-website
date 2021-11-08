import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import StyledLink from '../styledElements/Link.styled';
import logo from '../../../public/assets/logo.svg';
import { flexBetween, maxWidthLg, flexAlign } from '../../abstracts/Mixins';
import { media } from '../../abstracts/Responsive';
import { useGlobalState } from '../../context';

const Container = styled.div`
  ${flexBetween}
  ${maxWidthLg}
  padding: 3rem 2rem;

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
  const { links } = useGlobalState();

  return (
    <nav>
      <Container>
        <div className='left'>
          <Link href='/'>
            <div className='logo'>
              <Image src={logo} alt='arch logo' />
            </div>
          </Link>
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
      </Container>
    </nav>
  );
};

export default Navbar;
