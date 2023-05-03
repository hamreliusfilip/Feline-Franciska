import React from 'react';
import styled from 'styled-components';

import Menu from '../Components/Menu';
import ComicsViwer from '../Components/ComicsViwer';
import Footer from '../Components/Footer';

function Comics() {
  return (
    <Container>
      <Menu title="COMICS" /> 
  
      <Wrapper> 
      <ComicsViwer />
      </Wrapper>
      <Footer/> 
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
