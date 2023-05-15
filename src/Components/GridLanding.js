import React from 'react';
import styled from "styled-components";

import { Landingdata } from '../data/Landingdata'

function GridLanding () {
  return (
      <Wrapper>
        {Landingdata.map((image) => (
          <GridItem
            key={image.key}s
            className={image.type}
            style={{backgroundImage: `url(${image.img})` }}
            alt={image.alt}
          />
        ))}
      </Wrapper>
  );
}

export default GridLanding;

const Wrapper = styled.div`
  padding: 4em;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-auto-rows: 240px;
  justify-content: center;
  align-content: center; 

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    justify-content: flex-start;
    padding: 2em; 
  }
`;

const GridItem = styled.div`
  &.card-tall {
    grid-row: span 2;
  }
  
  &.card-wide {
    grid-column: span 2;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  font-size: 3rem;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`