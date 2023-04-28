import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuBar = ({title}) => {
  
  return (
    <Wrapper >
      <LogoStyle src="./logga/MAIN.png" alt="" />
        <Nav>
        <Title>{title}</Title>
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
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  padding-bottom: 120px;
  width: 100vw;
  height: 100px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Title = styled.h1`
  font-size: 4em;
  color: white;
  font-family: Raleway-Black;
  text-align: center;
`;
const LogoStyle = styled.img`
  cursor: pointer;
  height: 130px;
  width: 130px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
`;
const Nav = styled.nav`
  width: 29%;
  padding-top: 150px;
  margin: 0 auto;
  color: white;
  font-family: Raleway-Black;
  font-size: 1.3em;
  text-decoration: none;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
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
    transition: .2s;

    &.active {
      border-bottom: 4px solid white;
      margin-top: -7px;
    }
    &:hover {
      color: #1c1c1c;
    }
  }
  
`;
