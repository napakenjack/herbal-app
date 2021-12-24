import { sliderItems } from "../data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module


import "./Swiper.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


export default function TopSwiper() {  

  const slides = Array.from({ lenght: 4}).map(
    (el,index) => `Slide ${index + 1}`
  );
  
  return (
    <>
    <Swiper navigation={true} className="mySwiper">
      {sliderItems.map((card, index) =>{
        return(
          <SwiperSlide key={index} virtualIndex={index}>
            <div><img src={ card.img } className="product_img" alt="card"/></div>
            <div className="content_card">
              <div className="content_position">
                <div className="title">{card.title}</div>
                <hr className="slider_hr"/>
                <div className="subtitle">{card.desc}</div>
              </div>
            </div>
        </SwiperSlide>  
        )   
        })}   
        </Swiper>
    </>
  )
}