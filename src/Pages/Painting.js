import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';

import Grid from '../Components/Grid';

function Painting() {
  return (
    <Container>
      <Menu title="PAINTINGS" />
      <Wrapper>
      <Grid />
      </Wrapper>
    </Container>
  );
}

export default Painting;

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`;
