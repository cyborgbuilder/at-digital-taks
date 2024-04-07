import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
function Footer() {
  return (
    <Container>
      <Up>
      <Wrap>
      <Section width="35%">
        <img src='logo.png' />

        <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
      </Section>
      
      <Section width="35%">
        <h1 >Our Technologies</h1>
        <h4>ReactJs</h4>
        <h4>Gatsby</h4>
        <h4>NextJs</h4>
        <h4>NodeJs</h4>
        
      </Section>
      <Section_Middle width="30%">
        <h1 >Our Services</h1>
        <h4>Social Media Marketing</h4>
        <h4>Web & Mobile App Development</h4>
        <h4>Data & Analytics</h4>
        
        
      </Section_Middle>

      
      
      </Wrap>
      </Up>

      <Down>
        <Folder>
          <p>Privacy Policy | Terms & Conditions</p>
        </Folder>
      </Down>

    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    

`

const Up = styled.div`
width: 100%;
min-height: 20vh;
 background: #6B3CC9;
;
display: flex;
    justify-content: center;

    @media only screen and (max-width: 1200px){
      //height: 60vh;
    }

`

const Down = styled.div`
  width: 100%;
  height: 14vh;
  background: #6B3CC9;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    //justify-content: center;
    //align-items: center;
    //flex-wrap: wrap;
    padding: 0 100px;


    @media only screen and (max-width: 1200px){
      flex-direction: column;
      padding: 20px 0;
    }

   

    
    .icons{
        color: #B50909;
        font-size: 32px;
        margin-right:  8px; 
    }
    

`

const Section = styled.div`
width: ${props => props.width};
height: 100%;
padding: 40px 20px;


@media only screen and (max-width: 1200px){
  width: 100%;
  margin: 0;
  padding: 3px 0;
  text-align: center;
  height: 50%;
}

 .heading{
    color: #B50909;
 }

 h1{
    color: #fff;
    font-family: "Inter", sans-serif;

    @media only screen and (max-width: 1200px){
      font-size: 15px;
    }
 }


p{
  color: #fff;
  font-size: 12px;
  padding-top: 9px ;
  font-family: "Lato", sans-serif;

  @media only screen and (max-width: 1200px){
    font-size: 14px;
  }
  
}

h4{
  color: #fff;
  margin: 10px 0;
  font-family: "Inter", sans-serif;

  @media only screen and (max-width: 1200px){
    font-size: 13px;
  }
}

h2{
    color: #fff;
    font-size: 34px;
  
    @media only screen and (max-width: 1200px){
      font-size: 28px;
    }
  }

img{
  width: 70%;
  margin-bottom: 10px ;

  @media only screen and (max-width: 1200px){
    display: none;
  }
}

a{
  display: flex;
  justify-content: center;
  text-decoration: none;

  

}

.icons_footer{
  color: #fff;
  font-size: 20px;
  margin:  5px 10px;
}

`

const Section_Middle = styled(Section)`
@media only screen and (max-width: 1200px){
  display: none;
}

`

const Folder = styled.div`
width: 30%;
padding: 10px 0;
border-top: 1px solid white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.heading{
    color: #B50909;
 }

@media only screen and (max-width: 1200px){
  text-align: center;
  width: 70%;
}

.ceriture{
  width: 12%;
  padding-top: 5px;

  @media only screen and (max-width: 1200px){
    width: 30%;
  }
}

p{
  font-size: 13px;
  margin-top: 10px ;
  text-align: center;
  color: #fff;

  @media only screen and (max-width: 1200px){
    font-size: 11px;
  }
}

img{
  width:5%;
}
a{
  font-size: 15px;
  text-align: center;
}



`


export default Footer