import styled from 'styled-components';
import Grid from '../Components/Grid';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';

function Painting() {
  return (
    <Container>
      <Menu title="PAINTINGS" />
        <Wrapper>
          <Grid storagePath="PaintingAssets" />
        </Wrapper>
      <Footer />
    </Container>
  );
}

export default Painting;

const Container = styled.div`
  background-color: black;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;
