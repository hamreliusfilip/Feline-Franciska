import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'
import { Shopdata } from '../data/Shopdata'

const GridShop = () => {
  const ref1 = useRef(0);
  const ref2 = useRef(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  useEffect(() => {
    const middleScroll = (ref1.current.scrollWidth - ref1.current.clientWidth) * 2;
    ref1.current.scrollLeft = middleScroll;
    setScrollLeft1(ref1.current.scrollLeft);
  }, []);

  const handleScroll1 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
    setScrollLeft1(ref1.current.scrollLeft);
  };

  const handleScroll2 = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset;
    setScrollLeft2(ref2.current.scrollLeft);
  };

  const Shopdata1 = Shopdata.slice(0, Shopdata.length / 2).map(item => ({...item, info: item.info, price: item.price}));
  const Shopdata2 = Shopdata.slice(Shopdata.length / 2).map(item => ({...item, info: item.info, price: item.price}));

  return (
    <div>
      <Wrapper>
        <ButtonWrapperLeft disabled={scrollLeft1 === 0} onClick={() => handleScroll1(-280)}>
            <ImageLeft src="" alt = "arrow" />
        </ButtonWrapperLeft>
        <Total ref={ref1}>
          {Shopdata1.map((image) => (
            <Box
                key={image.key}
                className={image.type}
                style={{backgroundImage: `url(${image.img})` }}
                alt={image.alt}
                info={image.info}
                price={image.price}
            />
          ))}
        </Total>
        <ButtonWrapperRight disabled={scrollLeft1 === ref1.current.scrollWidth - ref1.current.clientWidth} onClick={() => handleScroll1(280)}>
            <ImageRight src="" alt = "arrow"/>
        </ButtonWrapperRight>
      </Wrapper>

      <Wrapper>
        <ButtonWrapperLeft disabled={scrollLeft2 === 0} onClick={() => handleScroll2(-280)}>
            <ImageLeft src="" alt = "arrow"/>
        </ButtonWrapperLeft>
        <Total ref={ref2}>
          {Shopdata2.map((image) => (
            <Box
                key={image.key}
                className={image.type}
                style={{backgroundImage: `url(${image.img})` }}
                alt={image.alt}
                info={image.info}
                price={image.price}
            />
          ))}
        </Total >
        <ButtonWrapperRight disabled={scrollLeft2 === ref2.current.scrollWidth - ref2.current.clientWidth} onClick={() => handleScroll2(280)}>
            <ImageRight src="" alt = "arrow"/>
        </ButtonWrapperRight>
      </Wrapper>
    </div>
  );
};

export { Shopdata }
export default GridShop

const ButtonWrapperLeft = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999!important;
  background-color: white; 
  opacity: 0;
  height: 70%;
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 15px;

  &:hover {
    opacity: 0.2;
    transition: 0.5s;
  }
`
const ButtonWrapperRight = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999!important;
  background-color: white; 
  opacity: 0;
  height: 70%;
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 15px;

  &:hover {
    opacity: 0.2;
    transition: 0.5s;
  }
`
const ImageLeft = styled.img`
  right:0;
  transform: scaleX(-1);
  height: 10px;
  width: 30px;
`
const ImageRight = styled.img`
  left: 0;
  cursor: pointer;
  height: 10px;
  width: 30px;
`
const Total = styled.div`
  position: relative;
  z-index: 999!important;
  overflow: scroll;
  display: flex;
  color: #DCDCDC;
  width: 100vw;
  
  &::-webkit-scrollbar {
  display: none;
}
`

const Wrapper = styled.div`
margin-top: 1%;
width: 100vw;
position: relative;
`

const Box = styled.div`
  max-width: 320px;
  max-height: 320px;
  min-width: 320px;
  min-height: 320px;
  margin-right: 20px;
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover {
    &::before {
      content: "${props => props.info} ${props => props.price}";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: bold;
    }
  }
`;