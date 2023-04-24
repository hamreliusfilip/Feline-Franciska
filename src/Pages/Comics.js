import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';

function Comics() {
  return (
    <Container>
      <Menu title="COMICS" />
      <Wrapper>

      </Wrapper>
    </Container>
  );
}

export default Comics;

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`;
