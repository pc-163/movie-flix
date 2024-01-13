import { FcFlashOn } from 'react-icons/fc';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import { useContext } from 'react';

import { UserContext } from '../../Pages/CategoryPage';

const FetchTV = ({ tvChannel }) => {

    const ImageAPI = useContext(UserContext);

    return (
        <>
            <div className="columns"  id="tvchannels">
                <div className="column cat-icons">
                    <FcFlashOn /> <i>Tv Channel Movies</i>
                </div>
                <div className="column">
                    <a href="#none" className="button is-primary float-right">
                        <strong>View All</strong>
                    </a>
                </div>
            </div>

            <div className="columns">
                <div className="column is-12">
                    <Swiper watchSlidesProgress={true} slidesPerView={5} spaceBetween={15} navigation={true} modules={[Navigation]} className="mySwiper cats-slide">
                        {
                            tvChannel.map((post) => (
                                <SwiperSlide key={post.id}>
                                    <div className="movie-card">
                                        <img src={`${ImageAPI}${post.poster_path}`} alt="poster_path"/>

                                        <div className="info">
                                            <h4>Title: {post.title}</h4>
                                            <p>Description: {post.overview}</p>
                                            <p>Release Date: {post.release_date}</p>
                                            <a href="#watch-now" className="button is-primary mt-2">
                                                <strong>Watch Now</strong>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))

                        }

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FetchTV