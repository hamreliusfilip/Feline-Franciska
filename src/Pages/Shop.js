import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';

function Shop() {
  return (
    <Container>
      <Menu title="SHOP" />
      <Wrapper>

      </Wrapper>
    </Container>
  );
}

export default Shop;

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`;
