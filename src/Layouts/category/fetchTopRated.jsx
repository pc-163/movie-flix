import { FcFlashOn } from 'react-icons/fc';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import { useContext } from 'react';

import { UserContext } from '../../Pages/CategoryPage';

const FetchTopRated = ({topRatedList}) => {

    const ImageAPI = useContext(UserContext);

    return (
        <>
            <div className="columns">
                <div className="column">
                    <FcFlashOn /> Top Rated
                </div>
                <div className="column">
                    <a className="button is-primary">
                        <strong>View All</strong>
                    </a>
                </div>
            </div>

            <div className="columns">
                <div className="column is-12">
                    <Swiper watchSlidesProgress={true} slidesPerView={5} spaceBetween={15} navigation={true} modules={[Navigation]} className="mySwiper cats-slide">
                        {
                            topRatedList.map((post) => (
                                <SwiperSlide key={post.id}>
                                    <img src={`${ImageAPI}${post.poster_path}`} alt="poster_path" />
                                </SwiperSlide>
                            ))

                        }

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FetchTopRated