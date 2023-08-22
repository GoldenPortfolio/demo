"use client";
import React from "react";

import { motion } from 'framer-motion';
import Image from "next/image";
import Section1_text from "./Section1_text";
import { SectionWrapper } from "../(hoc)/index";

function Section_4() {
  return (
    <section className=" 1300 1300:w-[1250px] h-full relative overflow-hidden  flex flex-col items-center justify-center m-auto">
      <Section1_text />

      <div className=" w-full h-full  absolute  flex flex-col  items-center  justify-center">
        <div className=" w-[1000px] 1000:w-full h-full z-[-10] opacity-[0.3]  absolute flex flex-col bg-cover items-center justify-center ">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            // @ts-ignore
            autoPlay="autoplay"
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Section_4, "Section_4");
