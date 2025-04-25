"use client";
import { IconType } from "react-icons/lib";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { useSwiper } from "swiper/react";

import SliderButton from "./SliderButton";

const SliderButtons = () => {
  const swiper = useSwiper();

  const buttons: [IconType, () => void][] = [
    [RiArrowLeftLine, () => swiper.slidePrev()],
    [RiArrowRightLine, () => swiper.slideNext()],
  ];

  return (
    <div className="w-max absolute bottom-2 right-2 flex gap-1 z-10">
      {buttons.map(([Icon, onClick], index) => (
        <SliderButton key={index} Icon={<Icon />} handleClick={onClick} />
      ))}
    </div>
  );
};

export default SliderButtons;
