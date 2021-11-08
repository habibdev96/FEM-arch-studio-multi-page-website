import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/logolight.svg';
import { flexAlign, flexBetween, maxWidthMd } from '../../abstracts/Mixins';
import Button from './Button';
import StyledLink from '../styledElements/Link.styled';
import { media } from '../../abstracts/Responsive';
import { useGlobalState } from '../../context';

const StyledFooter = styled.footer`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthMd}
  ${flexBetween}
  margin: 10rem auto;
  background-color: var(--veryLightGrey);

  ${media.lg} {
    flex-direction: column;
  }

  .left {
    ${flexAlign}

    ${media.lg} {
      flex-direction: column;
    }
  }

  .logo {
    padding: 5rem;
    background-color: var(--veryDarkBlue);
  }

  .links {
    ${flexAlign}

    ${media.sm} {
      flex-direction: column;
    }
  }

  .right {
    transform: translateX(10rem);

    ${media.xxl} {
      transform: translateX(0);
    }
  }
`;

const Footer = (): JSX.Element => {
  const { links } = useGlobalState();

  return (
    <StyledFooter>
      <Container>
        <div className='left'>
          <div className='logo'>
            <Image src={logo} alt='arch logo' layout='fixed' />
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
    </StyledFooter>
  );
};

export default Footer;
