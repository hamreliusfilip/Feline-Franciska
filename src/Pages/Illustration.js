import React from 'react';
import styled from 'styled-components';


import GridIllustrations from '../Components/GridIllustrations';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function Illustrations() {
  return (
    <Container>
      <Menu title="ILLUSTRATIONS" />
      <Wrapper>
        <GridIllustrations />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Illustrations;

const Container = styled.div`
  background-color: black;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`;
