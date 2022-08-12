import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../img/sidebar.png';
import Ecommerce from '../img/ecommerce.png';
import HOC from '../img/hoc.png';
import MusicApp from '../img/musicapp.png';
import 'swiper/css';
import { Color } from '../Theme/Variable';

const Porfoliodiv = styled.div`
 margin: -10rem 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 70vh;
`
const Pheader1 = styled.span`
 color: ${Color.white};
 font-size: 2rem;
 font-weight: bold;
`
const Pheader2 = styled.span`
color: ${Color.orange};
 font-size: 2.5rem;
 font-weight: bold;
`
const Pimage = styled.img`
width: 19rem;
filter: drop-shadow(2px 2px 14px 14px rgba(50, 115, 85, 0.62));
border-radius: 19px;
`
const Pswiper = styled(Swiper)`
overflow: visible !important;
`
const Pswiperslider = styled(Pswiper)`
margin-top: 3rem;
width: 100%;
`
// const PswiperSlide = styled(SwiperSlide)`
// width: 20rem;
// `

const Porfolio = () => {
  return (
    <Porfoliodiv>
        <Pheader1>Recent Projects</Pheader1>
        <Pheader2>Portfolio</Pheader2>

        <Pswiperslider
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
        >
            <SwiperSlide>
                <Pimage src={Sidebar} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <Pimage src={Ecommerce} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <Pimage src={HOC} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <Pimage src={MusicApp} alt='' />
            </SwiperSlide>
        </Pswiperslider>
    </Porfoliodiv>
  )
}

export default Porfolio