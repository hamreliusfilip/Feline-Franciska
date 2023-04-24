import React, { useState } from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuBar = ({title}) => {
  const [window, setWindow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  const openClose = () => {
    setWindow(!window);
  };

  return (
      <Wrapper>
          <Logo src="./logga/MAIN.png" alt="" />
          <Nav style={{ height: window ? 70 : 150 }}>
              <Burger onClick={toggleMenu}>
                  <Icon onClick={openClose} isActive={isActive}>
                      <LogoStyle src={isOpen ? "loggor/cross.svg" : "loggor/menu.svg"} alt="MENU" />
                  </Icon>
              </Burger>
              <Navigation>
                  {window && <Title>{title}</Title>}
                  <Nav2 style={{ display: window ? 'none' : 'block' }}>
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
                  </Nav2>
              </Navigation>
          </Nav>
      </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 4em;
  color: white;
  font-family: Raleway-Black;
  margin-top: -5px;
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
`;
const Logo = styled.img`
  height: 130px;
  width: 130px;
  margin: 2%;
`;
const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;
const LogoStyle = styled.img`
  position: absolute;
  position: fixed;
  cursor: pointer;
  right: 0;
  margin-right: 2.5%;
  height: 30px;
  width: 30px;
`;
const Burger = styled.div`
  position: relative;
  z-index: 999;
  cursor: pointer;
  margin-top: -0.5%;
`;
const Navigation = styled.div`
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 30%;
  cursor: pointer;
`;
const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 1px;
  left: 15px;
  top: 30px;
  background-color: black;
`;
const Nav2 = styled.nav`
  color: white;
  font-family: Raleway-Black;
  font-size: 1.3em;
  text-decoration: none;
  display: flex;
  margin-top: 5%;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
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

