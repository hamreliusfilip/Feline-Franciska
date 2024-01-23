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
      <Disclaimer>2024 FELINE & FRANCISKA</Disclaimer>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
  padding-top: 20px;
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
  flex-direction: row;

  @media (max-width: 1250px) {

  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: row;

    @media (max-width: 1250px) {
      /* Adjust the alignment and spacing for mobile */
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1em;
      margin-left: 0;
    }
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

  @media (max-width: 1250px) {
    /* Adjust the margin and width for mobile */
    margin: 0;
    width: 100%;
    padding-bottom: 20px;
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

  @media (max-width: 1250px) {
    /* Adjust the padding for mobile */
    padding: 20px;
  }
`;
