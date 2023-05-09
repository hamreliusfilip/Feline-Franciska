import React from 'react';
import styled from "styled-components";

import { Landingdata } from '../data/Landingdata'

function GridLanding () {
  return (
    <div>
      <Wrapper>
        {Landingdata.map((image) => (
          <GridItem
            key={image.key}
            className={image.type}
            style={{backgroundImage: `url(${image.img})` }}
            alt={image.alt}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default GridLanding;

const Wrapper = styled.div`
  padding: 4em;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-auto-rows: 240px;
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

  &:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(-3px) scale(1);
  }
`;

const ViewLargeImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white; 
  z-index: 999;
`;

const ImageLarge = styled.img`
min-width: 70%;
min-height: 70%;

max-width: 70%;
max-height: auto;
`

const ImageLargeText = styled.p`
font-size: 1.2em;
font-family: HelveticaAll; 
color: black;
font-weight: 600;
`

const ButtonClose = styled.button`
`