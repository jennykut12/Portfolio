import React from 'react'
import styled from 'styled-components';
import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';
import { Color } from '../Theme/Variable';
import { useContext } from "react";
import { themeContext } from '../Context';

const Togglediv = styled.div`
    display: flex;
    justify-content: space-between;
    border: 3px solid ${Color.white};
    border-radius: 1rem;
    position: relative;
    padding:2px;
     &:hover{
        color: ${Color.orange} ;
        cursor: pointer;
    }
`
const BsFillMoonStarsFilldiv = styled(BsFillMoonStarsFill)`
     width: 1rem;
     height: 1rem;
    `
    const BsFillSunFilldiv = styled(BsFillSunFill)`
    width: 1rem;
    height: 1rem;
   `
const Toggledbutton = styled.button`
     border-radius: 100%;
     width: 1rem;
    height: 1rem;
     background: ${Color.white};
     position: absolute;
      &:hover{
        background: ${Color.orange} ;
        cursor: pointer;
    }
    `

const Toggle = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({type: 'toggle'})
  }
  return (
    <Togglediv>
        <BsFillMoonStarsFilldiv/>
        <BsFillSunFilldiv/>
        <Toggledbutton 
        onClick={handleClick}
        // style={darkMode? {left: '2px'} : {right: '2px'}} 
        >
          
        </Toggledbutton>
    </Togglediv>
  )
}

export default Toggle