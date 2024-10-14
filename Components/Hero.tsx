"use client";
import Image from "next/image";
import React from "react";
import ButtonComponent from "./ButtonComponent";

function Hero() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="px-6 lg:px-16  h-[100vh] lg:flex justify-between items-center relative">
      <div className="lg:w-1/2">
        <h1 className="font-bold text-[36px] lg:text-[48px] xl:text-[56px] leading-tight lg:leading-snug">
          Find, Book or Rent a car - quickly and easily
        </h1>
        <p className="py-3 lg:text-lg xl:text-xl">
          Discover a seamless way to find, book, or rent the perfect car for
          your journey. Whether you're looking for a quick booking, our platform
          makes it effortless.
        </p>
        <ButtonComponent
          btnType="button"
          title="Explore cars"
          handleClick={handleClick}
          containerstyle="bg-blue-600 text-white px-6 py-3 mt-6 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="relative lg:w-1/2 flex justify-end ">
        <div className=" z-10 w-[80%] lg:w-[100%] ">
          <Image src="/Heroimg.png" alt="hero" width={500} height={400} />
        </div>
        <div className="absolute hover:bottom-0 hover:right-0 w-[100%] lg:w-[100%]">
          <Image
            src="/hero-bg.png"
            alt="hero background"
            width={800}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
