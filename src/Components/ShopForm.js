import React from "react";
import styled from 'styled-components'
import emailjs from 'emailjs-com'

const ShopForm = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_aya5557', 'template_0qb2ge1', e.target, 'RYDwVvTLPB7zm-oNA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
        <Box>
          <Heading1>Make an inquiry</Heading1>
          <form onSubmit={sendEmail}>
            <Label>
              <Input type="text" name="name" placeholder="name" required/>
            </Label>

            <Label>
              <Input type="email" name="email" placeholder="email" required/>
            </Label>

            <Label>
              <Input type="text" name="object" placeholder="object nr." required/>
            </Label>

            <Label>
              <InputText type="text" name="other" placeholder="other" required/>
            </Label>

            <ButtonWrapper>
              <Button type="submit" value="Send" >SEND</Button>
            </ButtonWrapper>

          </form>
        </Box>
    </div> 
    )
  }
  export default ShopForm;

const Heading1 = styled.p`
  postion: relative;
  font-family: 'Raleway-Black';
  font-size: 5em;
  color: #DCDCDC;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2em;
}
`

const Box = styled.div`
  flex-grow: 1;
  width: 40rem;
  height: auto;
  text-align: left;
  margin-bottom: 100px;
  background-color: black;
  border-radius: 15px;

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
    margin: 10px 10px 10px 10px;
    padding: 10px 5px 20px 5px;
}
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const Input = styled.input`
  width: 85%;
  height: 30px;
  font-size: 0.6em;
  font-weight: bold;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid white;
  caret-color: white;
  background-color: black;
  padding: 5px;
  color: white;
  transition: .5s linear;
  font-family: 'Raleway-Black';
  letter-spacing: 1px;

  padding: 10px;
  margin:10px;

  &:focus {
    border: 2px solid #DCDCDC;
    caret-color: #DCDCDC;
    color: #DCDCDC;
    border-radius: 15px;
  }

  @media (max-width: 600px) {
    width: 70%;
}
`
const InputText = styled.textarea`
  min-width: 85%;
  max-width: 85%;
  height: 30px;
  resize: vertical; 
  text-color: white;
  max-height: 120px;
  font-size: 0.6em;
  font-weight: bold;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid white;
  caret-color: white;
  background-color: black;
  padding: 5px;
  transition: .5s linear;
  font-family: 'Raleway-Black';
  letter-spacing: 1px;

  padding: 10px;
  margin:10px;

  &:focus {
    border: 2px solid white;
    caret-color: white;
    color: #DCDCDC;
    border-radius: 15px;
  }

  &::-webkit-resizer {
    display: none;
  }

  @media (max-width: 600px) {
    min-width: 70%;
    max-width: 70%;
}
`
const Label = styled.label`
  flex-grow: 1;
  font-size: 45px;
  font-weight: bold;
  padding: 20px 20px 20px 20px;
  font-family: 'Raleway-Black';
  text-color: white;
  max-width:700px;
  text-decoration: none;
`
const Button = styled.button`
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


