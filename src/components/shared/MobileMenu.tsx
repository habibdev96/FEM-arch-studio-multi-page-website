import styled from 'styled-components';
import StyledLink from '../styledElements/Link.styled';
import { useGlobalState } from '../../context';

const Overlay = styled.div`
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);

  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: auto;
  z-index: 2000;
  background-color: var(--white);

  @media (min-width: 800px) {
    display: none;
  }

  .menu-content {
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50vh;
    padding: 2rem;
    margin-top: 5rem;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
    text-align: center;
    padding-bottom: 2rem;
    margin-bottom: 5rem;
    border-bottom: 0.1rem solid var(--lightGray);
  }
`;

const MobileMenu = () => {
  const { isMobileMenuOpen, links, handleMobileMenuClose } = useGlobalState();

  if (isMobileMenuOpen) {
    return (
      <Overlay>
        <StyledMobileMenu>
          <div className='menu-content'>
            <ul className='menu-links'>
              {links.map((link) => (
                <li key={link.id}>
                  <StyledLink
                    mobile={true}
                    href={link.path}
                    onClick={handleMobileMenuClose}
                  >
                    {link.text}
                  </StyledLink>
                </li>
              ))}
            </ul>
          </div>
        </StyledMobileMenu>
      </Overlay>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
