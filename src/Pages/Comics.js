import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';
import Menutest from '../Components/Menutest';

function Comics() {
  return (
    <Container>
      {/* <Menu title="COMICS" /> */}
      <Menutest title="COMICS" /> 
      <Wrapper> 
      </Wrapper>
    </Container>
  );
}

export default Comics;

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`
const Wrapper = styled.div`
  height: 2000px; 
  width: 100vw;
  background-color: black;
`
