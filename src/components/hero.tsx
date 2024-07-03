import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between h-full max-w-screen-2xl mx-auto pb-8">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative grid place-items-center gap-8 rounded-full">
          <div className="text-5xl md:text-7xl xl:text-9xl font-medium font-serif">HueHarmony</div>
          <div className="uppercase border font-medium rounded-full border-black max-w-sm w-full text-center py-2 text-sm 2xl:text-base">
            Your skin your vibe
          </div>
          <Image
            src="/download.png"
            alt="home-graidnet"
            width={600}
            height={800}
            className="absolute blur-2xl z-[-1] w-full h-[600px]"
          />
        </div>
      </div>
      <div className="flex justify-between pb8">
        <div className="uppercase text-sm 2xl:text-base px-4">
          www.hueharmanoy.com
        </div>
        <div className="uppercase text-sm 2xl:text-base px-4">Azure Stars</div>
      </div>
    </div>
  );
};

export default Hero;
