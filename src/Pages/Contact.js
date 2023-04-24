import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';

function Contact() {
  return (
    <Container>
      <Menu title="CONTACT" />
      <Wrapper>

      </Wrapper>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`;
