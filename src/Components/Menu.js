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

          <div style={{ height: window ? 70 : 150 }}>
              <Burger onClick={toggleMenu}>
                  <Icon onClick={openClose} isActive={isActive}>
                      <LogoStyle src={isOpen ? "loggor/cross.svg" : "loggor/menu.svg"} alt="MENU" />
                  </Icon>
              </Burger>
              <Navigation>
                  {window && <Title>{title}</Title>}
                  <Nav style={{ display: window ? 'none' : 'block' }}>
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
              </Navigation>
          </div>
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
  top: 15px;
`;
const Logo = styled.img`
  height: 130px;
  width: 130px;
  margin: 2%;
`;

const LogoStyle = styled.img`
  cursor: pointer;
  height: 30px;
  width: 30px;
`;
const Burger = styled.div`
  position: relative;
  cursor: pointer;
`;
const Navigation = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 30%;
`;
const Icon = styled.div`
  position: absolute;
  width: 30px;  
  height: 30px;
`;
const Nav = styled.nav`
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

    &:hover {
      color: #1c1c1c;
    }

    &.active {
      border-bottom: 4px solid white;
      margin-top: -7px;
    }
  }
`;

