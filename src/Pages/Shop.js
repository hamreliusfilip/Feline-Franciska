import React from 'react';
import styled from 'styled-components';

import Menu from '../Components/Menu';
import GridShop from '../Components/GridShop';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

function Shop() {
  return (
    <Container>
      <Menu title="SHOP" />
      <Wrapper>
      <GridShop /> 
      <ContactForm /> 
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Shop;

const Container = styled.div`
  height: 100%;
`;

const Wrapper = styled.div`
  padding-top: 100px;
  height: 100%;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
