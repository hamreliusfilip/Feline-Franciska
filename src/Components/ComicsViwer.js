import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'
import { Comicsdata } from '../data/Comicsdata'

const ComicsViwer = () => {
  const ref1 = useRef(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);

  useEffect(() => {
    const middleScroll = (ref1.current.scrollWidth - ref1.current.clientWidth) * 2;
    ref1.current.scrollLeft = middleScroll;
    setScrollLeft1(ref1.current.scrollLeft);
  }, []);

  const handleScroll1 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
    setScrollLeft1(ref1.current.scrollLeft);
  };

  return (
    <div>
      <Wrapper>
        <ButtonWrapperLeft disabled={scrollLeft1 === 0} onClick={() => handleScroll1(-280)}>
            <ImageLeft src="" alt = "arrow" />
        </ButtonWrapperLeft>
        <Total ref={ref1}>
          {Comicsdata.reverse().map((image) => (
            <Box
                key={image.key}
                style={{backgroundImage: `url(${image.img})` }}
                alt={image.alt}
            />
          ))}
        </Total>
        <ButtonWrapperRight disabled={scrollLeft1 === ref1.current.scrollWidth - ref1.current.clientWidth} onClick={() => handleScroll1(280)}>
            <ImageRight src="" alt = "arrow"/>
        </ButtonWrapperRight>
      </Wrapper>
    </div>
  );
};

export { Comicsdata }
export default ComicsViwer

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
margin-top: -5%;
width: 100vw;
position: relative;
`

const Box = styled.div`
  min-width: 826px;
  min-height: 1169px;
  max-width: 826;
  max-height: 1169px;

  margin-right: 20px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-left:20px;
`;