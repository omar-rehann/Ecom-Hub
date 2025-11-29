import "../styles/all.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/styles.css';
import { Pagination } from 'swiper/modules';
import Bannerone from "../img/slider-01.jpg"
import Bannertwo from "../img/slider-02.jpg"
import Bannerthree from "../img/slider-03.jpg"

function Banner(){
    return(
       <>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide >
            <img src={Bannerone} className="w-100" alt="bannerone" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bannertwo} className="w-100" alt="bannertwo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bannerthree} className="w-100" alt="bannerthree" />
          </SwiperSlide>
        
          
        </Swiper>
      </>
    )
}
export default Banner;
