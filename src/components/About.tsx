import Image from "next/image";

import Button from "./Button";
import Pretitle from "./Pretitle";

const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          <div className="flex-1">
            <div className="max-w-[540px]  flex flex-col items-center xl:items-start">
              <Pretitle text="About us" />
              <h2 className="h2 mb-6">
                Focused on Excellence in Every Project
              </h2>
              <p className="mb-11">
                Our unweavering commitment to excellence is reflected in every
                project we undertake. We believe that design is about more than
                just aesthetics; From concept to completion, we melticulously
                craft solutions that embody quality, precision, and innovation.
              </p>
              <div className="w-max flex flex-col text-right mb-10 items-center xl:items-start">
                <Image
                  src="/assets/img/about/signature.svg"
                  alt="about"
                  width={154}
                  height={38}
                />
                <p>Company CEO</p>
              </div>
              <Button text="Contact us" />
            </div>
          </div>
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative">
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image
                src={"/assets/img/about/img.jpg"}
                height={493}
                width={444}
                alt="about-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
