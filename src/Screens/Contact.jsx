import React from 'react';
import styled from 'styled-components';
import { Button } from '../Components/Button';
import { Color } from '../Theme/Variable';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import Thanks from './Thanks';
import Humbleicon from '../img/humble.png';

const Contactdiv = styled.div`
     padding: 0 3rem 0 3rem;
    display: flex;
    height: 80vh;
    margin-top: -18rem;
    display:flex;
    justify-content: center;
    gap:10rem;
    align-items: center;
`
const Cleftdiv = styled.div`
    
`
const Crightdiv = styled.div`
    display:flex;
    justify-content: center;
    position: relative;
    flex:1;
`
const Cawesome = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
`
const Cspan1 = styled.span`
    font-size:3rem ;
    font-weight: bold;
    gap: 2rem;
`
const Cspan2 = styled(Cspan1)`
    color: ${Color.orange};
`
const Cinput = styled.input`
    width:20rem;
    height:2rem;
    padding: 0.3em;
    outline:none;
    border: 2px solid ${Color.orange};
    border-radius: 8px;
    font-size: 16px;
`
const Ctextarea = styled.textarea`
    width:20rem;
    height:4rem;
    padding: 0.3em;
    outline:none;
    border: 2px solid ${Color.orange};
    border-radius: 8px;
    font-size: 16px;
`
// const Cbutton = styled.input`
    
// `
const Ccontactform = styled.div`
    padding: 0 3rem 0 3rem;
    display: flex;
    height: 80vh;
    margin-top: 4rem;
`
const Cform = styled.form`
    display: flex;
    flex-direction: column;
    gap:2rem;
    align-items: center;
`
const Cbutton = styled(Button)`
 width: 10rem;
 height: 2.5rem;
 margin-top:1rem;
`

const Thanksdiv = styled.div`
width:15rem;
height:10rem;
background: radial-gradient(circle, rgba(120,128,153,0.19641457680250785) 0%, rgba(221,248,254,0.22149294670846398) 100%);
color: ${Color.orange};
display: flex;
justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    border-radius: 8px;
`
const Thanksspan = styled.span`
font-size: 2rem;
font-weight: bold;
`
const Thanksimg = styled.img`
width: 5rem;
 height: 5rem;
`

const Contact = () => {

    const form = useRef();
    const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tq75rjp', 'template_77lfe6n', form.current, 'yOQ0GMSISuv-7mKwS')
      .then((result) => {
          console.log(result.text);
          setSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Contactdiv>
        <Cleftdiv>
            <Cawesome>
                <Cspan1>Get in touch</Cspan1>
                <Cspan2>Contact me</Cspan2>
            </Cawesome>
        </Cleftdiv>

        <Crightdiv>
           { !sent ? 
           <Cform ref={form} onSubmit={sendEmail}>
                <Cinput required type='text' name='user_name' placeholder='Fullname' />
                <Cinput required type='email' name='user_email' placeholder='Email' />
                <Ctextarea required name='message' placeholder='Message' />
                <Cbutton>Submit</Cbutton>
            </Cform>
            :
            <Thanksdiv>
                <Thanksspan>Email Recieved With Thanks</Thanksspan>
                <Thanksimg src={Humbleicon} alt='' />
            </Thanksdiv>
        }
        </Crightdiv>
    </Contactdiv>
  )
}

export default Contact