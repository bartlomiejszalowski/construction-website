import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { OpinionType } from "@/@Types/general";
import { opinions } from "@/constants/opinions";

import Slide from "./Slide";
import SliderButtons from "./SliderButtons";

const Slider = () => {
  return (
    <Swiper
      loop
      className="bg-white shadow-custom w-full max-w-[630px] h-[200px]"
    >
      {opinions.map((opinion: OpinionType, index) => (
        <SwiperSlide key={index}>
          <Slide
            imageSrc={opinion.imageSrc}
            opinion={opinion.opinion}
            author={opinion.author}
          />
        </SwiperSlide>
      ))}

      <div>
        <SliderButtons />
      </div>
    </Swiper>
  );
};

export default Slider;
