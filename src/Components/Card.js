import React from 'react';
import styled from 'styled-components';
import { Color } from '../Theme/Variable';
import { Button } from './Button';

// const Cards = styled.div`
// width: 10rem;
// height: 13rem;
// position:absolute;
// display: flex;
// flex-direction: column;
// gap: 1rem;
// text-align: center;
// background: rgba(255 255 255 0.2);
// box-shadow:${Color.orange};
// border-radius: 20px;
// padding: 0 26px 2px 26px;
// margin-top:10rem;
// `
const Cards = styled.div`
width: 10rem;
height: 13rem;
position:absolute;
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
width: 10rem;
text-align: center;
background: radial-gradient(circle, rgba(120,128,153,0.19641457680250785) 0%, rgba(221,248,254,0.22149294670846398) 100%);
border: 2px solid ${Color.orange};
box-shadow:${Color.orange};
border-radius: 20px;
padding: 0px 26px 2rem 26px;
color: ${Color.white} ;
`
const Cardimg = styled.img`
 transform: scale(0.6);
 margin-bottom: -2rem;
`
const Cardspan1 = styled.span`

`
const Cardspan2 = styled.span`
 font-size: 16px;
`
const CardButton = styled(Button)`
 font-size: 16px;
 background: ${Color.white};
 border-radius: 7px;
 padding: 10px;
 color: #5290FD;
`

const Card = ({emoji, heading, details}) => {
  return (
    <Cards>
        <Cardimg src={emoji} alt='' />
        <Cardspan1>{heading}</Cardspan1>
        <Cardspan2>{details}</Cardspan2>
        <CardButton>Learn more</CardButton>
    </Cards>
  )
}

export default Card