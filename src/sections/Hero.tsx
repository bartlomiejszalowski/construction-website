import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero bg-hero bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-l from black/0 via-black/50 to-black/70 z-10"></div>
      <div className="container mx-auto h-full flex items-center ">
        <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
          <h1 className="text-white h1 mb-4">
            <span className="text-accent">Building </span>robust lasting
            solutions
          </h1>
          <p className="text-white text-center text-lg mb-4">
            From concept to completion, we deliver exceptional results. We
            ensure that each project is completed on time, within budget, and to
            the highest possible standards.
          </p>
          <div>
            <Button text="See our work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
