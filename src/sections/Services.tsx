"use client";

import { Tabs } from "@radix-ui/react-tabs";
import Image from "next/image";
import { useState } from "react";

import { ServiceDataType } from "@/@Types/general";
import Button from "@/components/Button";
import Pretitle from "@/components/Pretitle";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceData } from "@/constants/services";

const Services = () => {
  const [activeTab, setActiveTab] = useState<string>("construction");
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Solutions we provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions, from planning to
            copletion, with a focus on quality and innovation
          </p>
        </div>

        {/* tabs */}
        <Tabs
          defaultValue="construction"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col xl:flex-row w-full gap-[30px]"
        >
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
            {serviceData.map((item: ServiceDataType) => (
              <TabsTrigger
                key={item.name}
                value={item.name}
                className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
              >
                <div
                  className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                    activeTab === item.name
                      ? "bg-primary text-white"
                      : "bg-accent text-white"
                  }`}
                >
                  <div className="text-4xl">{item.icon}</div>
                </div>
                <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                  {item.name}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {/* tabs content */}
          <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <div className="flex flex-col md:flex-row gap-[30px]">
                  {/* images */}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb) => (
                      <div
                        key={thumb.url}
                        className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                      >
                        <Image
                          src={thumb.url}
                          alt={thumb.alt}
                          fill
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  {/*  text and button*/}
                  <div>
                    <div>
                      <h3 className="h3 mb-6">{item.title}</h3>
                      <p className="mb-10">{item.description}</p>
                      {/* service list */}
                      <ul className="grid grid-cols-2 gap-4 mb-12">
                        {item.serviceList.map((service) => (
                          <li key={service} className="flex items-center gap-4">
                            <div className="w-[6px] h-[6px] bg-accent"></div>
                            <div className="capitalize font-medium text-primary">
                              {service}
                            </div>
                          </li>
                        ))}
                      </ul>
                      {/* btn  */}
                      <Button text="Learn More" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
