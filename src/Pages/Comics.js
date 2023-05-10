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
        <BackButton href="/ComicsLib">BACK</BackButton>
        <ComicsViwer />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Comics;

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`;

const Wrapper = styled.div`
  width: 100vw;
  background-color: black;
  position: relative;
  padding-top: 100px;
`;

const BackButton = styled.a`
  color: white;
  text-decoration: none;
  font-family: 'raleway-black';
  font-size: 1em;
  border: 2px solid white;
  border-radius: 5px;
  width: 100px;
  padding: 10px;
  text-align: center;

  position: absolute;
  top: 50px;
  left: 17px;

  &:hover {
    color: black;
    background-color: white;
    border: 2px solid black;
  }
`;
