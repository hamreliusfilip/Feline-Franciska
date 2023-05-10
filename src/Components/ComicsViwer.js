import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'
import { Comicsdata } from '../data/Comicsdata'

const ComicsViwer = () => {
  const ref1 = useRef(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);

  useEffect(() => {
    ref1.current.scrollLeft = 0;
    setScrollLeft1(ref1.current.scrollLeft);
  }, []);
  

  const handleScroll1 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
    setScrollLeft1(ref1.current.scrollLeft);
  };

  return (
    <div>
      <Wrapper>
        <Total ref={ref1}>
          {Comicsdata.map((image) => (
            <Box
              key={image.key}
              style={{ backgroundImage: `url(${image.img})` }}
              alt={image.alt}
            />
          ))}
        </Total>
        <ButtonWrapper>
          <ButtonWrapperLeft disabled={scrollLeft1 === 0} onClick={() => handleScroll1(-520)}>
            <TextLeft>PREV</TextLeft>
          </ButtonWrapperLeft>
          <ButtonWrapperRight disabled={scrollLeft1 === ref1.current.scrollWidth - ref1.current.clientWidth} onClick={() => handleScroll1(520)}>
            <TextRight>NEXT</TextRight>
          </ButtonWrapperRight>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
};

export { Comicsdata }
export default ComicsViwer

const ButtonWrapper = styled.div`
  position: abolute;
  z-index: 999!important;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin: 50px;
`;

const ButtonWrapperLeft = styled.button`
  all: unset;
  padding-right: 10px;
  pointer: cursor;
`
const ButtonWrapperRight = styled.button`
  all: unset;
  padding-left: 10px;
`
const TextLeft = styled.p`
  right:0;
  height: 10px;
  width: 30px;
  color: white;
  pointer: cursor;
  font-family: 'Raleway-Black';
  padding-right: 30px;
`
const TextRight = styled.p`
  left: 0;
  cursor: pointer;
  height: 10px;
  width: 30px;
  color: white;
  font-family: 'Raleway-Black';
`
const Total = styled.div`
  position: relative;
  z-index: 700;
  overflow: scroll;
  display: flex;
  color: #DCDCDC;
  width: 100vw;
  
  &::-webkit-scrollbar {
  display: none;
}
`
const Wrapper = styled.div`
  margin-top: 5%;
  width: 100vw;
  position: relative;
`
const Box = styled.div`
  min-width: 500px;
  min-height: 720px;
  max-width: 500px;
  max-height: 720px;

  margin-right: 20px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-left:20px;
`;