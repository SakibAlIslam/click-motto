// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const TopCategoriesSlider = () => {
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="each-slider aspect-[229/117]">
            <img className="h-full w-full" src="https://i.ibb.co/GdH4rmJ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg" alt="" />
        </div>
        </SwiperSlide>
    </Swiper>
  );
};

export default TopCategoriesSlider;
