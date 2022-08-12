import React from 'react';
import { Button } from '../../Components/Button';
import styled from "styled-components";
import { Color } from '../../Theme/Variable';

const Wrapper = styled.div`
 display: flex;
 justify-content: space-between;
 height: 10vh;

`
const Nleft = styled.div`
 display: flex;
 align-items: center;
 flex:1;
 gap: 2rem;
`
const Nname = styled.text`
 font-size:1.3rem;
 font-weight:bold;
`
const Nright = styled.div`
 display: flex;
 align-items: center;
 flex:1;
 justify-content: space-between;
 text-decoration:none;
 font-weight:400;
`
const Nlist = styled.div`
flex:10;
`
const Nul = styled.div`
display: flex;
gap: 2rem;
margin-right:4rem;
`
const Nli = styled.div`
    &:hover{
        color: ${Color.orange} ;
        cursor: pointer;
    }
`

function Navbar() {
  return (
    <Wrapper>
        <Nleft>
            <Nname>Jennifer</Nname>
        </Nleft>
        <Nright>
            <Nlist>
                <Nul>
                    <Nli>Home</Nli>
                    <Nli>About</Nli>
                    <Nli>Experience</Nli>
                    <Nli>Services</Nli>
                    <Nli>Testimonials</Nli>
                </Nul>
            </Nlist>
            <Button className='button'>Contact</Button>
        </Nright>
    </Wrapper>
  )
}

export default Navbar