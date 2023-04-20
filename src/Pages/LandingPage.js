import react from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Grid from '../Components/Grid';

function LandingPage() {
  return (
    <Wrapper>

      <LogoWrapper>
        <Logo src="./logga/MAIN.png" alt="" />
        <LogoText>Feline & Franciska</LogoText>
        {/* <LogoTextSmall>BY FANNY HAMRELIUS</LogoTextSmall> */}
      </LogoWrapper>

        <Nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/Illustrations">ILLUSTRATIONS</NavLink>
            </li>
            <li>
              <NavLink to="/Paintings">PAINTINGS</NavLink>
            </li>
            <li>
              <NavLink to="/Comics">COMICS</NavLink>
            </li>
            <li>
              <NavLink to="/Shop">SHOP</NavLink>
            </li>
          </ul>
        </Nav>

      <Grid />

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
  padding: 1em;
`
const Logo = styled.img`
  height: 250px;
  width: 250px;
  padding: 0.2em;
`
const LogoText = styled.p`
  color: white;
  font-family: AveriaT;
  font-size: 4em; 
  padding: 0.5em;
`
const LogoTextSmall = styled.p`
color: white;
  font-family: HelveticaAll;
  font-size: 1.3em; 
  padding: 1em;
  font-weight: bold;
`
const Nav = styled.nav`
  width: 500px;
  padding: 2em;
  color: white;
  font-family: Raleway-Black;
  font-size: 1.3em;
  text-decoration: none;
  display: flex;
  justify-content: justify-center;
  align-items: center;
  flex-wrap: grow;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
  }

  li {
    margin: 0 1em;
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
