"use client";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import HireMe from "@/components/Hire.js";
import DheerajHero from "@/Assets/dheeraj.png";
import TabOption from "./TabOption";

const HeroSection = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col items-center px-8 pb-16 sm:flex-row-reverse sm:px-12">
        <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
          <Image
            alt="Dheeraj Image"
            className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            src={DheerajHero}
            width={1000}
            height={100}
          />

          {/* <div className="absolute top-1/4	left-3/4 w-1/6 h-2/6	blur z-30"></div> */}
          {/* <div className="absolute top-3/4	left-1/4 w-1/6 h-1/6 bg-rose-900	blur2 z-30"></div> */}
          {/* <div className="absolute top-1/4	right-1/4 w-1/6 h-1/6 bg-rose-900	blur2 -z-30">   </div> */}
        </div>
        <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            👋
            <span className="text-rose-500	">
              Hey, I&apos; m <br></br>
              <span className="text-black text-4xl lg:text-7xl">
                Dheeraj Thakur
              </span>
            </span>{" "}
            <br></br>{" "}
            <span className="text-violet-500 text-2xl lg:text-4xl font-extrabold mb-4">
              <span className="text-rose-500">&lt;code/&gt;, </span>Creativity,
              and Coffee
            </span>
          </h1>
          <p className="mb-2 leading-relaxed text-dark ">
            Unlocking the extraordinary in the digital realm, I don&apos; t just
            code – I weave passion into every line. Each stroke of code is an
            art, solving problems while elevating user experiences. Join me in
            reshaping the digital landscape, one beautifully crafted project at
            a time.
          </p>

          <div className="flex flex-row space-y-3 md:flex-row md:space-x-2 md:space-y-0">
            <a href="tel: 918750203871">
              <button
                className="flex flex-row  rounded-lg border-2 border-solid	border-black  px-6 py-3 text-base text-Dark transition hover:bg-black hover:text-white dark:text-black dark:shadow-sm dark:shadow-orange-300 
            dark:hover:bg-rose-500   justify-between sm:w-355px  sm:py-2 sm:items-center  items-center my-2"
              >
                <FaPhoneAlt className="mr-2 text-green-600 " size={20} />
                Contact me
              </button>
            </a>
            <button className="underline mx-2 sm:py-2">Explore services</button>
          </div>
        </div>
        <HireMe />
      </section>
      <div>
        <div class="hidden h-60 relative w-full xl:flex justify-center items-center">
          <h1 class="absolute top-0  text-9xl font-bold text-secondary z-0 ">
            &lt;About /&gt;{" "}
          </h1>
          <h1 class="text-dark font-extrabold text-9xl z-20 whitespace-nowrap">
            Dheeraj Thakur
          </h1>
        </div>
      </div>
      <TabOption />
    </>
  );
};

export default HeroSection;
