import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { Paintingsdata } from '../data/Paintingsdata'



function GridPaitnings () {

  const [blurValue, setBlurValue] = useState(0);
  
  const [viewImage, setViewImage] = useState(Paintingsdata[0].img);
  const [viewImageAlt, setViewImageAlt] = useState(Paintingsdata[0].alt);
  const [viewImageInfo, setViewImageInfo] = useState(Paintingsdata[0].info);
  const [showViewLargeImage, setShowViewLargeImage] = useState(false);

  useEffect(() => {
    if (showViewLargeImage) {
      document.body.style.overflow = "hidden";
      setBlurValue(10);
    } else {
      document.body.style.overflow = "auto";
      setBlurValue(0);
    }
  }, [showViewLargeImage, setBlurValue]);


  return (
    <div>
        {showViewLargeImage && (
          <ViewLargeImage>
            <ImageLarge src={viewImage} alt={viewImageAlt} />
            <ImageLargeText>{viewImageInfo}</ImageLargeText>
            <ButtonClose onClick={() => setShowViewLargeImage(false)}>CLOSE</ButtonClose>
          </ViewLargeImage>

        )}
      <Wrapper blurValue={blurValue}>
        {Paintingsdata.map((image) => (
          <GridItem
            key={image.key}
            className={image.type}
            style={{ backgroundImage: `url(${image.img})` }}
            alt={image.alt}
            onClick={() => {
              setViewImage(image.img);
              setViewImageAlt(image.alt);
              setViewImageInfo(image.info);
              setShowViewLargeImage(true);
            }}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default GridPaitnings;

const Wrapper = styled.div`
  padding: 4em;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-auto-rows: 240px;
  filter: blur(${props => props.blurValue}px);
  transition: all 900ms;
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
  background: #353535;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white; 
  z-index: 999!important;
  padding: 2em;
`;


const ImageLarge = styled.img`
height: 70vh;
width: auto;
`

const ImageLargeText = styled.p`
font-size: 1.2em;
font-family: HelveticaAll; 
color: black;
font-weight: 600;
`

const ButtonClose = styled.button`
padding: 1.3em 3em;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 2.5px;
color: #000;
background-color: #fff;
border: none;
border-radius: 45px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;
font-family: HelveticaAll;
font-weight: 900;

&:hover {
  background-color: black;
  color: #fff;
  box-shadow: 0px 15px 20px grey;
  color: #fff;
  transition: all 0.3s ease 0s;
`
