import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { getAllTopCategories } from "../../api/api";

const TopCategoriesSlider = () => {
  const [images, setImage] = useState([]);
  const contentsPerPage = 10;

  useEffect(() => {
    getAllTopCategories(contentsPerPage, setImage);
  }, []);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      breakpoints= {{
        240: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24
        },
        1536: {
          slidesPerView: 5,
          spaceBetween: 32
        }
      }}
    >
      {images?.map(
        (
          image,
          index
        ) => (
          <SwiperSlide key={index}>
            <div className="each-slider aspect-[229/117] relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-full h-full opacity-30">
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary font-medium text-base md:text-xs">
                <span>{image?.photographer}</span>
              </div>
              <img
                className="h-full w-full object-cover"
                src={image?.src?.original}
                alt=""
              />
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default TopCategoriesSlider;
