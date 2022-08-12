import React from 'react';
import styled from 'styled-components';
import { Button } from '../Components/Button';
import { Color } from '../Theme/Variable';
import Amazon from '../img/amazon.png';
import Facebook from '../img/Facebook.png';
import Upwork from '../img/Upwork.png';
import Shopify from '../img/Shopify.png';

const Workdiv = styled.div`
 display:flex;
 flex-direction: row;
 height: 90vh;
 padding: 0 3rem 0 3rem;
`
const Awesome = styled.div`
 display:flex;
 flex-direction: column;
 position:relative;
`
const Awesometext1 = styled.span`
 color: ${Color.white};
 font-size: 2.5rem;
 font-weight: bold;
`
const Awesometext2 = styled.span`
 color: ${Color.orange};
 font-size: 2.5rem;
 font-weight: bold;
`
const Awesometext3 = styled.span`
color: ${Color.white};
 font-size: 14px;
 margin-top:1rem;
`
const Ibutton = styled(Button)`
 width: 10rem;
 height: 2.5rem;
 margin-top:1rem;
`
const Wright = styled.div`
 position: relative;
 z-index:1;
`
const Wmaincircle= styled.div`
  left: 9rem;
  position: relative;
  width: 18rem;
  height: 18rem;
  border-radius:100%;
  box-shadow: 2px 2px 14px 14px rgba(50, 115, 85, 0.62);
  background: radial-gradient(circle, rgba(120,128,153,0.19641457680250785) 0%, rgba(221,248,254,0.22149294670846398) 100%);
  top: 2rem;
  border: 2px solid ${Color.gray};
`
const Wseccircle = styled.div`
display:flex;
 align-items:center;
 justify-content:center;
 position: absolute;
 height: 6rem;
 border-radius:100%;
  box-shadow: 2px 2px 14px 14px rgba(50, 115, 85, 0.62);
  border: 2px solid ${Color.gray};
  background: radial-gradient(circle, rgba(120,128,153,0.19641457680250785) 0%, rgba(221,248,254,0.22149294670846398) 100%);
  &:hover{
        background: ${Color.orange} ;
        cursor: pointer;
    }
`
const Wseccircle1 = styled(Wseccircle)`
 top: -3rem;
 left: 6rem;
 width:6rem;
 height: 6rem;
`
const Wseccircle2 = styled(Wseccircle)`
 top: 5rem;
 left: -3rem;
 width:6rem;
 height: 6rem;
`
const Wseccircle3= styled(Wseccircle)`
 top: 5rem;
 left: 6rem;
 width:6rem;
 height: 6rem;
`
const Wseccircle4 = styled(Wseccircle)`
 top: 5rem;
 left: 15rem;
 width:6rem;
 height: 6rem;
`
const Wimage = styled.img`
 transform: scale(0.6);
`
// const Wimage2 = styled.img`
 
// `
// const Wimage3 = styled.img`
 
// `
// const Wimage4 = styled.img`
 
// `
// const BackCircle = styled.div`
//  position: absolute;
//  width:13rem;
//  height: 13rem;
//  border-radius:100%;
//  z-index:-1;
// `
// const GreenCircle = styled(BackCircle)`
//  background: ${Color.purple};
//  left: 21rem;
//  top: 8rem;
// `
// const OrangeCircle = styled(BackCircle)`
//  background: ${Color.orange};
//  left: 21rem;
//  top: 0rem;
// `

const Works = () => {
  return (
    <Workdiv>
         <Awesome>
            <Awesometext1>Works for All These</Awesometext1>
            <Awesometext2>Brand & Clients</Awesometext2>
            <Awesometext3>Dedicated and performance-driven software developer with  a pro-active 
                <br/> approach and determination to successfully finish  all assigned 
                <br/> projects within a budget and schedule. Effective team-player offering extraordinary analytical 
                <br/> skills and important ability to think critically.
             </Awesometext3>
                <Ibutton>Hire Me </Ibutton>
        </Awesome>
        <Wright>
            <Wmaincircle>
                <Wseccircle1>
                    <Wimage src={Upwork} alt="" />
                </Wseccircle1>
                <Wseccircle2>
                    <Wimage src={Shopify} alt="" />
                </Wseccircle2>
                <Wseccircle3>
                    <Wimage src={Amazon} alt="" />
                </Wseccircle3>
                <Wseccircle4>
                    <Wimage src={Facebook} alt="" />
                </Wseccircle4>
            </Wmaincircle>
            {/* <GreenCircle></GreenCircle>
            <OrangeCircle></OrangeCircle> */}
        </Wright>
    </Workdiv>
  );
};

export default Works;