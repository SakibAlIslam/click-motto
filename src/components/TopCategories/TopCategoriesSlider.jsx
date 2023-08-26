import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { getAllTopCategories } from "../../api/api";

const TopCategoriesSlider = () => {
  const [images, setImage] = useState([]);
  const contentsPerPage = 6;

  useEffect(() => {
    getAllTopCategories(contentsPerPage, setImage);
  }, []);

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
      {images?.map(
        (
          image,
          index
        ) => (
          <SwiperSlide key={index}>
            <div className="each-slider aspect-[229/117] relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-full h-full opacity-30">
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary font-medium text-base">
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
