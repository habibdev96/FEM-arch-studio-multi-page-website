import styled from 'styled-components';
import Image from 'next/image';
import { CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { flexCenter } from '../../abstracts/Mixins';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ILeadersData } from '../../interfaces';

const StyledArticle = styled.article`
  text-align: center;

  .image {
    position: relative;
    cursor: pointer;
    margin-bottom: 2rem;
    overflow: hidden;

    &:hover,
    &:focus {
      .overlay {
        transform: translateY(0);
      }
    }
  }

  .overlay {
    ${flexCenter}
    gap: 2rem;
    transform: translateY(-100%);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: var(--mainTransition);
  }

  .icon {
    color: var(--white);
    font-size: var(--md);
  }
`;

const SingleLeader = ({ image, name, position }: ILeadersData): JSX.Element => {
  return (
    <StyledArticle>
      <div className='image'>
        <Image src={image} alt={name} layout='responsive' />
        <div className='overlay'>
          <a href='#!'>
            <FaLinkedin className='icon' />
          </a>
          <a href='#!'>
            <FaTwitter className='icon' />
          </a>
        </div>
      </div>
      <CardHeading light={false}>{name}</CardHeading>
      <Paragraph light={false}>{position}</Paragraph>
    </StyledArticle>
  );
};

export default SingleLeader;
