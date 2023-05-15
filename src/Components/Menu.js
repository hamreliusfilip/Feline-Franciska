import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {

  return (
    <Wrapper>
      <NavLink to="/" exact>
      <LogoStyle src="./logga/MAIN.png" alt="" />
      </NavLink>
      <Nav>
          <li>
            <NavLink to="/" exact activeClassName="active">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/Illustrations" activeClassName="active">ILLUSTRATIONS</NavLink>
          </li>
          <li>
            <NavLink to="/Paintings" activeClassName="active">PAINTINGS</NavLink>
          </li>
          <li>
            <NavLink to="/ComicsLib" activeClassName="active">COMICS</NavLink>
          </li>
          <li>
            <NavLink to="/Shop" activeClassName="active">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" activeClassName="active">CONTACT</NavLink>
          </li>
    
      </Nav>
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  position: relative;
  padding-top: 40px; 
  padding-bottom: 100px;
  width: 100vw;
  height: 100px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1070px) {
    flex-direction: column; 
    height: auto;
    justify-content: center;
  }
`;

const LogoStyle = styled.img`
  cursor: pointer;
  height: 130px;
  width: 130px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;

  @media (max-width: 1070px) {
    position: static;
    height: 150px;
    width: 150px;
  }
`
const Nav = styled.nav`
  margin: 0 auto;
  font-family: Raleway-Black;

  list-style: none;
  display: flex;

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 0 1em;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;

    &.active {
      border-bottom: 4px solid white;
      font-size: 1.4em;

      @media (max-width: 1070px) {
        font-size: 1.3em;
        line-height: 1.5;
        border-bottom: 2px solid white;
      }
    }
    &:hover {
      color: #1c1c1c;
    }
    @media (max-width: 1070px) {
      font-size: 1.3em;
      line-height: 1.5;
    }
  }
`;

