import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
  opinion: string;
  author: string;
}

const Slide: React.FC<Props> = ({ imageSrc, opinion, author }) => {
  return (
    <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
      <div className="relative hidden xl:flex w-[90px] h-[90px] ">
        <Image
          src={imageSrc}
          alt="testimonials"
          fill
          className="object-contain"
          quality={100}
        />
      </div>
      <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
        <p>{opinion}</p>
        <p className="font-primary font-semibold text-primary">{author}</p>
      </div>
    </div>
  );
};

export default Slide;
