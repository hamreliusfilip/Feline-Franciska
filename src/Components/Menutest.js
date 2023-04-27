import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menutest = ({ title }) => {
  const [window, setWindow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
    setWindow(!window);
  };

  return (
    <Wrapper>

      <Logo src="./logga/MAIN.png" alt="" />

      <div onClick={toggleMenu}>
        <Icon onClick={() => setIsActive(!isActive)} isActive={isActive}>
          <IconStyle src={isOpen ? "loggor/cross.svg" : "loggor/menu.svg"} />
        </Icon>
      </div>

      <div>
        {window && <Title>{title}</Title>}
        <Navigation style={{ display: window ? "none" : "block" }}>
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
        </Navigation>
      </div>

    </Wrapper>
  );
};
export default Menutest;

const Wrapper = styled.div`
  width: 100vw;
  height: 200px;
  background-color: black;

  margin: 0 auto;
  display: flex;
`
const Logo = styled.img`
  height: 130px;
  width: 130px;
`
const Navigation = styled.div`
width: 100vw;
height: 100px;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
`
const IconStyle = styled.img`
  width: 30px;
  height: 30px;
`
const Icon = styled.div`
  position: absolute;
  right: 0; 
  width: 30px;
  padding: 20px;
`
const Title = styled.h1`
  font-size: 4em;
  color: white;
  font-family: Raleway-Black;
`
const Nav = styled.nav`
  width: 500px;
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
`
