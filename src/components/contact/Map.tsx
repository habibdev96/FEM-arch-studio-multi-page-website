import styled from 'styled-components';
import Image from 'next/image';
import map from '../../../public/assets/contact/desktop/image-map.png';
import { maxWidthMd, sectionSpacingSm } from '../../abstracts/Mixins';

const Container = styled.div`
  ${maxWidthMd}
  ${sectionSpacingSm}
`;

const Map = (): JSX.Element => {
  return (
    <section>
      <Container>
        <div className='map'>
          <Image src={map} alt='locations map' layout='responsive' />
        </div>
      </Container>
    </section>
  );
};

export default Map;
