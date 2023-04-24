import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';

import Grid from '../Components/Grid';

function Illustrations() {
  return (
    <Container>
      <Menu title="ILLUSTRATIONS" />
      <Wrapper>
        <Grid />
      </Wrapper>
    </Container>
  );
}

export default Illustrations;

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`;
