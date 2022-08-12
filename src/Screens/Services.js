import React from 'react';
import styled from 'styled-components';
import Humble from '../img/humble.png';
import Glasses from '../img/glasses.png';
import HeartEmoji from '../img/heartemoji.png';
import { Button } from '../Components/Button';
import { Color } from '../Theme/Variable';
import Card from '../Components/Card';
import Resume from './Service/resume.docx';

const Servicesdiv = styled.div`
 display:flex;
 flex-direction: row;
 height: 110vh;
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
const Scardswrapper = styled.div`
 position: relative;
`
const Scard = styled.div`
 justify-content: center;
 display: flex;
 margin-left: 9rem;
`
// const Scard2 = styled.div`
//  left: 14rem;
//  position: absolute;
// `
// const Scard3= styled.div`
//  left: 14rem;
//  position: absolute;
// `
const Ibutton = styled(Button)`
 width: 10rem;
 height: 2.5rem;
 margin-top:1rem;
`

const Services = () => {

  return (
    <Servicesdiv>
        <Awesome>
            <Awesometext1>My Awesome</Awesometext1>
            <Awesometext2>services</Awesometext2>
            <Awesometext3>I am a Frontend Developer with high level of 
             experience and 
             <br/> development, developming Quality work for my clients</Awesometext3>
             <a href={Resume} download >
                <Ibutton>Download CV</Ibutton>
             </a>
        </Awesome>
        <Scard>
            <Scardswrapper style={{ left:'14rem'}}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'UI'}
                    details = {'Figma, Sketch, Photoshop, Canva'}
                />
            </Scardswrapper>
            <Scardswrapper style={{top: '12rem', left:'-4rem'}} >
            <Card
                    emoji = {Humble}
                    heading = {'Software Developer'}
                    details = {'React.js, React native, Redux, Nodejs, Trello'}
                />
            </Scardswrapper>
            <Scardswrapper style={{top: '19rem', left:'12rem'}} >
            <Card
                    emoji = {Glasses}
                    heading = {'Develops'}
                    details = {'AWS, Trello'}
                />
            </Scardswrapper>
        </Scard>
    </Servicesdiv>
  )
}

export default Services