import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalState } from '../../context';
import { media } from '../../abstracts/Responsive';

const Toggler = styled.button`
  display: none;
  background: transparent;
  outline: 0;
  border: 0;
  z-index: 2000;

  ${media.md} {
    display: flex;
  }

  .icon {
    color: var(--veryDarkBlue);
    font-size: var(--sm);
  }
`;

const MobileMenuToggler = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobalState();

  const handleMobileMenuClick = (): void =>
    setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <Toggler onClick={handleMobileMenuClick}>
      {!isMobileMenuOpen ? (
        <FaBars className='icon' />
      ) : (
        <FaTimes className='icon' />
      )}
    </Toggler>
  );
};

export default MobileMenuToggler;
