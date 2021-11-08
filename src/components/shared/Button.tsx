import styled from 'styled-components';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { headingStyles, flexAlign } from '../../abstracts/Mixins';
import { IButtonProps } from '../../interfaces';

const StyledButton = styled.a`
  ${flexAlign}
  display: inline-flex;
  padding: 2.5rem 4rem;
  text-align: center;
  margin: 2rem 0;
  gap: 2rem;
  background-color: var(--veryDarkBlue);
  transition: var(--mainTransition);

  .text {
    ${headingStyles}
    font-size: 1.5rem;
    color: var(--white);
  }

  .icon {
    color: var(--white);
    font-size: 1.5rem;
  }

  &:hover,
  &:focus {
    background-color: var(--darkGrey);
  }
`;

const Button = ({ text, path }: IButtonProps): JSX.Element => {
  return (
    <Link href={path} passHref>
      <StyledButton>
        <span className='text'>{text}</span>
        <FaArrowRight className='icon' />
      </StyledButton>
    </Link>
  );
};

export default Button;
