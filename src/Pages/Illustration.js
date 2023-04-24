import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';

import GridIllustrations from '../Components/GridIllustrations';

function Illustrations() {
  return (
    <Container>
      <Menu title="ILLUSTRATIONS" />
      <Wrapper>
        <GridIllustrations />
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
