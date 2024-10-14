"use client";
import Image from "next/image";
import React from "react";
import ButtonComponent from "./ButtonComponent";

function Hero() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="mt-15 px-6 lg:pr-0 pl-16  h-[100vh] lg:flex justify-between items-center relative">
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

      <div className="relative  flex justify-end  w-1/2 bg-[url('/hero-bg.png')] bg-cover bg-no-repeat ">
        <Image src="/Heroimg.png" alt="hero" width={500} height={400}  className="z-10 w-full animate-fadeInRight "/>
      </div>
    </div>
  );
}

export default Hero;
