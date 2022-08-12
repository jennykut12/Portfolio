import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {clients} from '../Components/data';
import { Pagination } from 'swiper';
import "swiper/css/pagination";
import "swiper/css"
import { Color } from '../Theme/Variable';

const Twrapper = styled.div`
    padding: 0 3rem 0 3rem;
    height: 100vw;
    display: flex;
    align-items: center;
    margin-top: -18rem;
    justify-content:center;
    gap: 2rem;
    flex-direction: column;
`
const Theading = styled.div`
    align-self: start;
`
const Tspan1 = styled.span`
     font-size:2rem ;
    font-weight: bold;
    gap: 2rem;
`
const Timage = styled.img`
     height: 12rem;
    width: 12rem;
    border-radius: 100%;
`
const Tspan2 = styled(Tspan1)`
    color: ${Color.orange};
`
const Tswiper = styled(Swiper)`
     height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
`
const TSwiperSlide = styled(SwiperSlide)`
    display: flex;
    align-items: center;
    justify-content:center;
`
const Testimonialdiv = styled.div`
     padding:2rem;
    height: 15rem;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    flex-direction: column;
    border-radius: 20px;
    border: 2px solid ${Color.orange};
    background: radial-gradient(circle, rgba(120,128,153,0.19641457680250785) 0%, rgba(221,248,254,0.22149294670846398) 100%);
`
const Testimonialspan = styled.span`
    font-size: 18px ;
    font-weight: normal;
`

const Testimonial = () => {
  return (
    <Twrapper>
        <Theading>
            <Tspan1>Clients always get</Tspan1>
            <Tspan2>Exceptional Work</Tspan2>
            <Tspan1>from me...</Tspan1>
        </Theading>
        <Tswiper
            modules={[Pagination]}
            slidesPerView = {1}
            pagination = {{clickable:true }}
        >
            {clients.map((client, index)=>{
                return(
                    <TSwiperSlide key={index} >
                        <Testimonialdiv>
                            <Timage src={client.img} alt='' />
                            <Testimonialspan>{client.review}</Testimonialspan>
                        </Testimonialdiv>
                    </TSwiperSlide>
                )
            })}
        </Tswiper>
    </Twrapper>
  )
}

export default Testimonial