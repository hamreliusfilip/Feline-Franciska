import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

function Contact() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Menu title="CONTACT" />
      <Wrapper>
        <Heading>ABOUT</Heading>
        <InfoWrapper>
          <ProfileWrapper>
            <Profile src="../Bilder/ProfilePicture.jpg" alt=" " />
            <ResumeButton onClick={toggle}>RESUME</ResumeButton>
          </ProfileWrapper>
          <Info>I’m a swedish designer, illustrator & soon to be librarian. I have a bachlors degree in Visual Communication design and run my sole properiship: Feline & Fransiska. <br></br> <br></br>I’m currently open for work! Do you have an idea that needs to be visualized? For printing, for use on your website or something else entirely? Get in touch with me!</Info>
        </InfoWrapper>
        {isOpen && (
          <ViewLargeImage>
            <Resume src='../Bilder/DummyCV.png' alt='Please reload the page' />
            <ButtonClose onClick={toggle}> CLOSE </ButtonClose>
          </ViewLargeImage>
        )}
        <WrapperContactInfo>
          <ContactForm />
        </WrapperContactInfo>
        <LogoWrapper>
          <StyledA href="https://www.instagram.com/feline_and_franciska/" target="_blank">
            <LogoStyle src='../Bilder/instagram.svg' alt='INSTAGRAM' />
          </StyledA>
          <StyledA href="https://www.linkedin.com/in/fanny-hamrelius-9814b1114/" target="_blank">
            <LogoStyle src='../Bilder/facebook.svg' alt='LINKEDIN' />
          </StyledA>
          <StyledA href="https://www.facebook.com/felineandfranciska" target="_blank">
            <LogoStyle src='../Bilder/linkedin.svg' alt='FACEBOOK' />
          </StyledA>
        </LogoWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Contact;

const fadeIn = keyframes`
from { opacity: 0; }
to { opacity: 1; }
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WrapperContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: black;
`
const Wrapper = styled.div`
  height: 2000px; 
  width: 100vw;
  background-color: black;
  `
const InfoWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
const Info = styled.p`
font-size: 1.5em;
color: white;
font-family: raleway-bold; 
width: 300px;
padding-left: 100px;
text-align: justify;
`
const Profile = styled.img`
height: 400px;
width: 300px;
border-radius: 5%;
object-fit: cover;
`
const Heading = styled.h1`
font-size: 50px;
color: white;
font-family: raleway-black; 
text-align: center;
`
const ResumeButton = styled.button`
position: relative;
top: 5%;
font-size: 1em;
height: 60px;
width: 300px;
background-color: black;
color: white;
border-radius: 15px;
cursor: pointer;
outline: none;
font-family: raleway-black;
border: 2px solid white;

&:hover {
  transition: all 0.3s ease 0s;
  background-color: white;
  color: black;
}
`
const ButtonClose = styled.button`
position: relative;
top: 4%;
font-size: 1em;
height: 60px;
width: 300px;
background-color: black;
color: white;
border-radius: 15px;
cursor: pointer;
outline: none;
font-family: raleway-black;
border: 2px solid white;

&:hover {
  transition: all 0.3s ease 0s;
  background-color: white;
  color: black;
}
`
const ViewLargeImage = styled.div`
  position: fixed;
  animation: ${fadeIn} 0.3s ease-in-out;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black; 
  z-index: 999!important;
  padding: 2em;
`
const Resume = styled.img`
  height: 80%;
  width: auto;
  object-fit: cover;
`
const StyledA = styled.a`
  postion: relative;
`

const LogoStyle = styled.img`
  position: relative;
  width: 5em;
  height: 5em;
  padding: 20px 20px 20px 20px;
  margin-top: 5%;

  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    width: 3em;
    height: 3em;
    padding: 0px 2% 0px 6%;
}
`
