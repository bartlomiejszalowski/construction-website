import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

import Pretitle from "@/components/Pretitle";
import { workData } from "@/constants/workData";

const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Our Projects" center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[488px] mx-auto">
            Providing exceptional service and results for over 20 years, we
            pride ourselves on our commitment to quality and customer
            satisfaction.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item) => (
          <div
            key={item.name}
            className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
          >
            <Image
              src={item.img}
              alt={item.name}
              quality={100}
              fill
              className="object-cover"
            />
            <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
              <div className="pl-8">
                <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                  {item.name}
                </h4>
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill className="text-accent text-xl" />
                  <p>{item.description}</p>
                </div>
              </div>
              <Link
                href={item.href}
                className="w-[44px] xl:w-[60px] h-[44px] bg-accent text-primary text-2xl flex justify-center items-center absolute right-3"
              >
                <RiArrowRightUpLine />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
