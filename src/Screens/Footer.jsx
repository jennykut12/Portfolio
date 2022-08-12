import React from 'react';
import styled from 'styled-components';
import Wave from '../img/wave.svg';
import {IoLogoWhatsapp} from 'react-icons/io';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import { Color } from '../Theme/Variable';

const Footerdiv = styled.div`
 flex-direction: row;
    /* height: 30vh;
    width: 100%;
    margin:0 -27rem 0 -3.5rem  ; */
    display: flex;
    align-items:center;
    justify-content:center;
    margin:-0.5rem -3.5rem  ;
    position: relative;
    margin-top: 7rem;
`
const Footerimg = styled.img`
    width: 125%;
    height: 20%;
`
const Footercontent = styled.div`
    margin-top: 11.5rem;
    position: absolute;
    display: flex;
    align-items: start;
    justify-content:center;
    flex-direction: row;
    padding: 0 0.5rem;
    width: 100%;
    gap: 2rem 8rem;
`
const Footericons = styled.div`
    display: flex;
    gap: 1rem;
`
const Footerspan = styled.span`
    color: ${Color.white};
    display: flex;
    text-align: center;
    font-size: 1.1rem;
    &:hover{
            color: ${Color.lightgreen} ;
            cursor: pointer;
        }
`
const FAiFillInstagram = styled(AiFillInstagram)`
 color: ${Color.white};
 font-size: 3rem;
 &:hover{
        color: ${Color.lightgreen} ;
        cursor: pointer;
    }
`
const FAiFillGithub = styled(AiFillGithub)`
 color: ${Color.white};
 font-size: 3rem;
 &:hover{
        color: ${Color.lightgreen} ;
        cursor: pointer;
    }
`
const FAiFillLinkedin = styled(AiFillLinkedin)`
 color: ${Color.white};
 font-size: 3rem;
 &:hover{
        color: ${Color.lightgreen} ;
        cursor: pointer;
    }
`
const FAiFillTwitterCircle = styled(AiFillTwitterCircle)`
 color: ${Color.white};
 font-size: 3rem;
 &:hover{
        color: ${Color.lightgreen} ;
        cursor: pointer;
    }
`
const FIoLogoWhatsapp = styled(IoLogoWhatsapp)`
 color: ${Color.white};
 font-size: 3rem;
 &:hover{
        color: ${Color.lightgreen} ;
        cursor: pointer;
    }
`

const Footer = () => {
  return (
    <Footerdiv>
        <Footerimg src={Wave} alt='' />
        <Footercontent>
            <Footerspan>jennykut.dj@gmail.com</Footerspan>
            <Footericons>
                    <a href='https://github.com/jennykut12'>
                    <FAiFillGithub/>
                    </a>
                    <a href='https://www.linkedin.com/in/jennifer-david-120249179'>
                    <FAiFillLinkedin/>
                    </a>
                    <a href='https://wa.me/2348133250770'>
                    <FIoLogoWhatsapp/>
                    </a>
                    <a href='https://twitter.com/dj_jennykut?t=M7CmaGotnFCalpK7c9HGXQ&s=09'>
                    <FAiFillTwitterCircle/>
                    </a>
                    <a href='https://twitter.com/dj_jennykut?t=M7CmaGotnFCalpK7c9HGXQ&s=09'>
                    <FAiFillInstagram/>
                    </a>
            </Footericons>
            <Footerspan>Website Developed by <br/> Jennifer David</Footerspan>
        </Footercontent>
    </Footerdiv>
  )
}

export default Footer