import React from 'react'
import { Button } from '../Components/Button'
import styled from "styled-components";
import { Color } from '../Theme/Variable';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import Magicpatternblob from '../img/magicpatternblob.png';
import Magicpatternblob1 from '../img/magicpatternblob1.png';
import Jennifer from '../img/jenniferimgbg.png';
// import Thumbup from '../img/thumbup.png';
// import Glassesimoji from '../img/glassesimoji.png';
// import Crown from '../img/crown.png';
// import Floating from '../Components/Floating';

const Iintro = styled.div`
 display: flex;
 margin-top: 6rem;
 height: 77vh;

`
const Ileft = styled.div`
 display: flex;
 position: relative;
 flex: 1;
 flex-direction: column;
 gap: 2rem;
`
const Iname = styled.div`
 display: flex;
 flex-direction: column;

`
const Ispan1 = styled.div`
 color: ${Color.white};
 font-weight: bold;
 font-size: 3rem;

`
const Ispan2 = styled(Ispan1)`
 color: ${Color.orange};

`
const Ispan3 = styled.div`
 color: ${Color.white};
 font-weight: 100px;
 font-size: 14px;
`
const Ibutton = styled(Button)`
 width: 10rem;
 height: 2.5rem;

`
const Iicons = styled.div`
 flex-direction: row;
 gap:1rem;
 margin-top: 3rem;
 display: flex;
`
const IAiFillGithub = styled(AiFillGithub)`
 color: ${Color.orange};
 font-size: 3rem;
 &:hover{
        color: ${Color.white} ;
        cursor: pointer;
    }
`
const IAiFillLinkedin = styled(AiFillLinkedin)`
 color: ${Color.orange};
 font-size: 3rem;
 &:hover{
        color: ${Color.white} ;
        cursor: pointer;
    }
`
const IIoLogoWhatsapp = styled(IoLogoWhatsapp)`
 color: ${Color.orange};
 font-size: 3rem;
 &:hover{
        color: ${Color.white} ;
        cursor: pointer;
    }
`
const IAiFillTwitterCircle = styled(AiFillTwitterCircle)`
 color: ${Color.orange};
 font-size: 3rem;
 &:hover{
        color: ${Color.white} ;
        cursor: pointer;
    }
`
const Iright = styled.div`
 position: relative;
 flex: 1;

`
const Iimgwrapper = styled.img`
 position: absolute;
 z-index: 1;
 width: 38rem;
 height: 38rem;
 margin:-23% -15% 0 0;
`
const Iimgwrapper1 = styled.img`
 position: absolute;
 z-index: 1;
 width: 35rem;
 height: 35rem;
 margin:-7.5rem 0 20rem 4rem;
`
const Iimg = styled.img`
 width: 20rem;
 height: 20rem;
 position: absolute;
 z-index: 1;
 margin:-1.5rem 0 0 8rem;
 border-radius: 6rem;
`
const Blur = styled.div`
 width:22rem;
 position: absolute;
 height:14rem;
 border-radius: 50%;
 background: ${Color.purple};
 z-index: -9;
 margin: -25% 0 0 50%;
 filter: blur(72px);
`
function Intro() {
  return (
    <Iintro>
      <Ileft>
      <Iname>
      <Ispan1>Hey!!! I Am</Ispan1>
      <Ispan2>Jennifer David</Ispan2>
      <Ispan3>I am a Frontend Developer with high level of 
      experience and development, developming Quality work for my clients</Ispan3>
      </Iname>
      <Ibutton>Hire Me</Ibutton>
      <Iicons>
        {/* <Iimg src={Github} alt="icon" />
        <Iimg src={Linkedin} alt="icon" />
        <Iimg src={Instagram} alt="icon" /> */}
        <a href='https://github.com/jennykut12'>
          <IAiFillGithub/>
        </a>
        <a href='https://www.linkedin.com/in/jennifer-david-120249179'>
          <IAiFillLinkedin/>
        </a>
        <a href='https://wa.me/2348133250770'>
         <IIoLogoWhatsapp/>
        </a>
        <a href='https://twitter.com/dj_jennykut?t=M7CmaGotnFCalpK7c9HGXQ&s=09'>
          <IAiFillTwitterCircle/>
        </a>
      </Iicons>
      </Ileft>
      <Iright>
          <Iimgwrapper src={Magicpatternblob} alt="icon" /> 
          <Iimgwrapper1 src={Magicpatternblob1} alt="icon" /> 
          <Iimg src={Jennifer} alt="icon" /> 
          <Blur style={{background: "rgb(238 210 255)"}}></Blur>
      </Iright>
    </Iintro>
  )
}

export default Intro