import React from 'react';
import styled from 'styled-components';
import { Color } from '../Theme/Variable';
import Humbleicon from '../img/humble.png';

const Thanksdiv = styled.div`
width:40rem;
height:30rem;
background: ${Color.white};
color: ${Color.orange};
display: flex;
justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Thanksspan = styled.span`
font-size: 5rem;
font-weight: bold;
`

const Thanks = () => {
  return (
    <Thanksdiv>
        <Thanksspan>Email Recieved With Love</Thanksspan>
        <img src={Humbleicon} alt='' />
    </Thanksdiv>
  )
}

export default Thanks