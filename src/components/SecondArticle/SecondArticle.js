import {popularProducts} from "../../data"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import 'swiper/swiper.scss'; 
import "swiper/modules/free-mode/free-mode.scss"

import "./SecondArticle.css";


// import Swiper core and required modules
import SwiperCore, {
  FreeMode
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode]);


export default function SecondArticle() { 
  
  return (
    <>
    <Swiper 
    slidesPerView={3} 
    spaceBetween={30} 
    freeMode={true} 
    className="article_swiper"
    >
        {popularProducts.map((card, index) =>{
            return(
                <SwiperSlide key={index} virtualIndex={index} className="article_slide">
                    <div><img src={card.img} className="live_vid" alt="card"/></div>
                    <div className="live_card">
                        <div className="card_position">
                        <div className="card_title">{card.title}</div>
                        <div className="card_subtitle">{card.desc}</div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
        
  </Swiper>
    </>
  )
}