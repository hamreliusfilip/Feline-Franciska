import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import GridLanding from '../Components/GridLanding';
import Footer from '../Components/Footer';

function LandingPage() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src="./logga/MAIN.png" alt="" />
        <TextWrapper>
          <LogoText>Feline & Franciska</LogoText>
          <LogoTextSmall>BY FANNY HAMRELIUS</LogoTextSmall>
        </TextWrapper>
      </LogoWrapper>
      <Nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/Illustrations">ILLUSTRATIONS</NavLink>
          </li>
          <li>
            <NavLink to="/Shop">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/Comics">COMICS</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/Paintings">PAINTINGS</NavLink>
          </li>
        </ul>
      </Nav>
      <GridLanding />
      <Footer />
    </Wrapper>
  );
} export default LandingPage;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoWrapper = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const TextWrapper = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`
const Logo = styled.img`
  height: 250px;
  width: 250px;
`
const LogoText = styled.p`
  color: white;
  font-family: AveriaT;
  font-size: 4em; 
  margin-top: 170px;
  margin-left: 20px;
`
const LogoTextSmall = styled.p`
  color: white;
  font-family: HelveticaAll;
  font-size: 1.3em; 
  font-weight: bold;
  margin-top: -70px;
  margin-left: 22px;
`
const Nav = styled.nav`
  width: 320px;
  color: white;
  font-family: Raleway-Black;
  font-size: 1.3em;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: grow;
  text-align: justify;
  margin-top: -65px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
  }

  li {
    margin: 0 -5px;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    text-height: 20px;
    line-height: 1.5;

    &:hover {
      color: #1c1c1c;
    }

    &.active {
      border-bottom: 4px solid white;
      margin-top: -7px;
    }
  }
`;


