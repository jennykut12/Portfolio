import React from 'react'
import styled from 'styled-components'
import { Color } from '../Theme/Variable'

const Experiencediv = styled.div`
display:flex;
 flex-direction: row;
 height: 30vh;
 align-items: center;
 justify-content: center;
 gap: 5rem;
 margin-bottom: 8rem;
`
const Achievement = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
const Circle = styled.div`
display:flex;
width: 4rem;
height: 4rem;
background: radial-gradient(circle, rgba(120,128,153,0.19641457680250785) 0%, rgba(221,248,254,0.22149294670846398) 100%);
position: relative;
border-radius: 100%;
display:flex;
align-items: center;
font-size: 1.5rem;
font-weight: bold;
margin-bottom: 2rem;
justify-content:center;
border: 2px solid ${Color.orange};
`
const Circlediv = styled.text`
 color: ${Color.orange} ;
`

const Experience = () => {
  return (
    <Experiencediv>
        <Achievement>
            <Circle>2+</Circle>
            <span>years</span>
            <Circlediv>Experience</Circlediv>
        </Achievement>
        <Achievement>
            <Circle>4+</Circle>
            <span>completed</span>
            <Circlediv>Projects</Circlediv>
        </Achievement>
        <Achievement>
            <Circle>2+</Circle>
            <span>companies</span>
            <Circlediv>Work</Circlediv>
        </Achievement>
    </Experiencediv>
  )
}

export default Experience