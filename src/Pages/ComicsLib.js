import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';

function ComicsLib() {
    return (
      <Container>
        <Menu title="COMICS LIBRARY" />
        <Wrapper>
          <ComicChoice>
            <a href="/Comics">
              <StyledImg src="../Bilder/p1.jpg" alt="Comic 1" />
            </a>
  
            <a href="/Comics">
              <StyledImg src="../Bilder/p1.jpg" alt="Comic 2" />
            </a>
          </ComicChoice>
        </Wrapper>
        <Footer />
      </Container>
    );
  }
  
  export default ComicsLib;

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`
const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px; 
`
const ComicChoice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white; 
    text-decoration: none;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`
const StyledImg = styled.img`
    height: 500px;
    width: auto;
    margin: 100px;

    &:hover {
        opacity: 0.5;
    }

    @media (max-width: 1000px) {
        margin: 30px;
        margin-top: 50px;
    }
`