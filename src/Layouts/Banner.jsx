import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '../Assets/Styles/banner.scss';

import Movie1 from "../Assets/Images/movie1.jpg";
import Movie2 from "../Assets/Images/movie2.jpg";
import Movie3 from "../Assets/Images/movie3.jpg";
import Movie4 from "../Assets/Images/movie4.jpg";


const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper main-slider"
            >
                <SwiperSlide>
                    <img src={Movie1} alt="Movie1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Movie2} alt="Movie2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Movie3} alt="Movie3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Movie4} alt="Movie4" />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}

export default Banner