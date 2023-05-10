import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Footer() { 
  return (
    <Wrapper>
      <Nav>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/Contact">CONTACT</NavLink></li>
          <li><NavLink to="/Illustrations">ILLUSTRATIONS</NavLink></li>
          <li><NavLink to="/Paintings">PAINTINGS</NavLink></li>
          <li><NavLink to="/ComicsLib">COMICS</NavLink></li>
          <li><NavLink to="/Shop">SHOP</NavLink></li>
        </ul>
      </Nav>
      <Disclaimer>© 2023 FELINE & FRANCISKA</Disclaimer>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
  padding-top: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Nav = styled.nav`
  flex: 1;
  margin-left: 20px;
  width: 100px;
  color: white;
  font-family: Raleway-Black;
  font-size: 1.3em;
  text-decoration: none;
  text-align: left;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: row;
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
    line-height: 1.7;

    &:hover {
      color: #1c1c1c;
    }

    &.active {
      border-bottom: 4px solid white;
      margin-top: -7px;
    }
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-bottom: 1em;
    width: 100%;
    text-align: center;
  }
`;

const Disclaimer = styled.p`    
  font-family: HelveticaAll;
  padding: 100px;
  font-size: 1.2em;
  color: white;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
  font-weight: bold;
`;
