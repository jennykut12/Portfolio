import React from 'react';
import styled from 'styled-components';
import { Color } from '../Theme/Variable';

const Floatingdiv = styled.div`
display:flex;
justify-content: space-between;
background: ${Color.white};
border-radius: 17px;
box-shadow: 2px 2px 14px 14px rgba(50, 115, 85, 0.62);
align-items: center;
padding: 0px 28px 0px 0;
height: 4.5rem;

`
const Floatingdivimg = styled.img`
width:3rem;
height: 3rem;
`
const Floatingtext = styled.span`
color: ${Color.black}
`

const Floating = ({image, txt1, txt2}) => {
  return (
    <Floatingdiv>
        <Floatingdivimg src={image} alt=""/>
        <Floatingtext>
            {txt1}
            <br/>
            {txt2}
        </Floatingtext>
    </Floatingdiv>
  )
}

export default Floating