"use client";

import { useEffect, useState } from "react";

import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import Topbar from "@/sections/Topbar";
import Work from "@/sections/Work";

export default function Home() {
  const [headerActive, setHeaderActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Topbar />

      {/* static header */}

      <div className="relative z-10">
        <Header />
      </div>

      {/* animated header */}
      <div
        className={`w-full transition-transform duration-300 fixed top-0 left-0 z-50 ${
          headerActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
