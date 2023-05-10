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
              <TextLink to="/Comics" activeClassName="active">
                1479 : Chapter 1
              </TextLink>
            </a>
  
            <a href="/Comics">
              <StyledImg src="../Bilder/p1.jpg" alt="Comic 2" />
              <TextLink to="/Comics" activeClassName="active">
                1479 : Chapter 2
              </TextLink>
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
`
const TextLink = styled.p`
    color: white;
    text-decoration: none;
    font-family: 'raleway-black';
    font-size: 2em;
    padding: 50px;
    
`
const StyledImg = styled.img`
    height: 500px;
    width: auto;
`