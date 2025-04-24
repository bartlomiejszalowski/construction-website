"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

import { StatsType } from "@/@Types/general";
import { statsData } from "@/constants/stats";

const Stats = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <div ref={statsRef} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
          {statsData.map((item: StatsType) => (
            <div key={item.text} className="w-full">
              <div className="text-5xl font-semibold">
                {isInView && (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    delay={0.5}
                    duration={3}
                  />
                )}
                <span>{item.endCountText}</span>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
