import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Footer () { 
    return (
      <Wrapper>
        <div>
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
          <Logo src="./logga/MAIN.png" alt="" />
        </div>
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
  align-items: center;
  border-top: 1px solid white;
  padding-top: 2em;
`;


const Logo = styled.img`
  height: 125px;
  width: 125px;
  margin-right: 3%;
`;

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
    flex-direction: column;
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