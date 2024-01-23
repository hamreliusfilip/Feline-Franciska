import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';

function GridPaintings() {
  const [state, setState] = useState({
    blurValue: 0,
    viewImage: {
      img: '',
      alt: '',
      info: ''
    },
    showViewLargeImage: false,
    paintingsData: []
  });

  const { blurValue, viewImage, showViewLargeImage } = state;

  useEffect(() => {
    if (showViewLargeImage) {
      document.body.style.overflow = "hidden";
      setState(prevState => ({ ...prevState, blurValue: 10 }));
    } else {
      document.body.style.overflow = "auto";
      setState(prevState => ({ ...prevState, blurValue: 0 }));
    }
  }, [showViewLargeImage, setState]);

  const fetchImagesFromFirebase = async () => {
   
    const storageRef = ref(storage, 'IllustrationAssets/');
    const imageListRef = await listAll(storageRef);

    const urls = await Promise.all(imageListRef.items.map(async (item) => {
      const url = await getDownloadURL(item);
      return url;
    }));

    setState(prevState => ({ ...prevState, viewImage: { img: urls[0], alt: '', info: '' } }));
    return urls;
  };

  useEffect(() => {
    fetchImagesFromFirebase().then((urls) => {
      const paintingsData = urls.map((url, index) => ({
        key: index,
        img: url,
      }));

      setState(prevState => ({ ...prevState, paintingsData }));
    });
  }, []);

  return (
    <>
      {showViewLargeImage && (
        <ViewLargeImage>
          <ImageLarge src={viewImage.img} alt={viewImage.alt} />
          <ImageLargeText>{viewImage.info}</ImageLargeText>
          <ButtonClose onClick={() => setState(prevState => ({ ...prevState, showViewLargeImage: false }))}>
            CLOSE
          </ButtonClose>
        </ViewLargeImage>
      )}
      <Wrapper blurValue={blurValue}>
        {state.paintingsData.map((image) => (
          <GridItem
            key={image.key}
            className={image.type}
            style={{ backgroundImage: `url(${image.img})` }}
            alt={image.alt}
            onClick={() => {
              setState(prevState => ({
                ...prevState,
                viewImage: {
                  img: image.img,
                  alt: image.alt,
                  info: image.info
                },
                showViewLargeImage: true
              }));
            }}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default GridPaintings;

const Wrapper = styled.div`
  padding: 4em;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-auto-rows: 240px;
  filter: blur(${props => props.blurValue}px);
  transition: all 900ms;
  justify-content: center;
  align-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    margin-top: -50px;
    margin-left: 0px;
  }
`
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

  @media (max-width: 1000px) {
    width: 90vw;
    height: auto;
  }
`
const ImageLarge = styled.img`
  height: 70vh;
  width: auto;

  @media (max-width: 1000px) {
    width: 90vw;
    height: auto;
  }
`
const ImageLargeText = styled.p`
font-size: 1.2em;
font-family: HelveticaAll; 
color: black;
font-weight: 600;
`
const ButtonClose = styled.button`
position: relative;
top: 5%;
font-size: 1em;
height: 60px;
width: 150px;
background-color: white;
color: black;
border-radius: 15px;
cursor: pointer;
outline: none;
font-family: raleway-black;
border: 2px solid black;

&:hover {
  transition: all 0.3s ease 0s;
  background-color: black;
  color: white;
}
`