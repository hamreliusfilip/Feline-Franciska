import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {

  return (
    <Wrapper>
      <LogoStyle src="./logga/MAIN.png" alt="" />
      <Nav>
        <ul>
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
        </ul>
      </Nav>
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  padding-top: 40px; 
  padding-bottom: 100px;
  width: 100vw;
  height: 100px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    flex-direction: column; 
    height: auto;
    padding-bottom: 10px;
    padding-top: 10px;
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

  @media (max-width: 1000px) {
    position: static;
    margin-bottom: 5px;
    height: 220px;
    width: 220px;
  }
`
const Nav = styled.nav`
  padding-top: 20px;
  margin: 0 auto;
  color: white;
  font-family: Raleway-Black;
  font-size: 1.3em;
  text-decoration: none;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }

  li {
    margin: 0 1em;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;

    &.active {
      border-bottom: 4px solid white;
      font-size: 1.4em;
      @media (max-width: 1000px) {
        font-size: 2em;
        border-bottom: 0px solid black;
      }
    }
    &:hover {
      color: #1c1c1c;
    }
    @media (max-width: 1000px) {
      font-size: 2em;
    }
  }
`;

