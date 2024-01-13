// import Image from "next/image";
// import DheerajHero from "@/Images/DheerajHero.png";
// import Link from "next/link";
// import {  FaPhoneAlt } from "react-icons/fa";


// export default function HeroSection() {
//   return (
//     <>
//       <div className="relative">
//         <div className=" container mx-auto lg:flex-row hero-height flex flex-col justify-center items-center">
//           <div className="w-full flex flex-col items-center lg:items-start justify-center px-5">
//             <h2 className="text-secondary font-extrabold text-3xl lg:text-4xl uppercase lg:normal-case text-center lg:text-left">
//               Welcome to
//               <span className="ml-2 text-3xl lg:text-4xl text-primary text-center lg:text-left">
//                 Indic Technologies
//               </span>
//             </h2>

//             <p className="text-secondary text-2xl lg:text-3xl text-center lg:text-left  mt-3 h-[60px] lg:h-[37px]">
//               We deals in{" "}
//             </p>

//             <p className="text-secondary mt-3 font-thin text-center lg:text-left">
//               A leading software-based company that specializes in creating
//               innovative and customized solutions for businesses and individuals
//               looking to establish their digital presence. With our expertise in
//               software development, web design, mobile application development,
//               and SEO, we help turn your digital dreams into reality.
//             </p>
//             <div className="mt-3 flex  justify-between sm:w-355px">
//               <Link href="/project">
//                 <button className="btn btn-1 flex flex-row  hover-filled-slide-right">
//                   <span className="text-xs">
//                     <FaPhoneAlt className="mr-2 text-green-600 " size={20} />
//                     Contact me
//                   </span>
//                 </button>
//               </Link>
//               <Link href="/contact-us">
//                 <button className="btn btn-2 hover-slide-right mx-2">
//                   <span className="text-xs">Contact us</span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="w-full lg:flex flex-row justify-center items-center px-5 hidden">
//             <Image
//               alt="Image"
//               src={DheerajHero}
//               width={600}
//               height={500}
//               className="transition-all hover:scale-105 "
//             />
//           </div>
//         </div>

//         <div className="w-full absolute bottom-5 right-0 left-0 ball">
//           <div className="bg-secondary w-14 h-14 rounded-full flex justify-center items-center shadow-lg mx-auto">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="26"
//               height="26"
//               fill="currentColor"
//               className="bi bi-arrow-down"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





"use client";
import { Space_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import {  FaPhoneAlt } from "react-icons/fa";
import HireMe from "@/components/Hire.js"
import DheerajHero from "@/Images/DheerajHero.png"
import TabOption from "./TabOption";

const HeroSection = () => {
  

  return (
    <>
      <section className="container mx-auto flex flex-col items-center px-8 pb-16 sm:flex-row-reverse sm:px-12">
        <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
          <Image
            alt="Hanging out with friends"
            className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            src={DheerajHero}
            width={1000}
            height={100}
          />

          <div className="absolute top-1/4	left-3/4 w-1/6 h-2/6	blur -z-30"></div>
          <div className="absolute top-3/4	left-2/4 w-1/6 h-1/6 bg-rose-500	blur2 -z-30"></div>
          {/* <div className="absolute top-1/4	right-1/4 w-1/6 h-1/6 bg-rose-900	blur2 -z-30">   </div> */}
        </div>
        <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1 className="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
            👋<span className="text-rose-500	">Hey,  I'm  <br></br>
            <span className="text-black text-4xl lg:text-7xl">Dheeraj Thakur</span> 
              </span> <br></br>{" "}
            <span className="text-violet-500 text-2xl lg:text-4xl font-extrabold mb-4">
            <span className="text-rose-500">&lt;code/&gt;, </span>Creativity, and Coffee
            </span>
            
          </h1>
          <p className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
          Unlocking the extraordinary in the digital realm, I don't just code – I weave passion into every line. Each stroke of code is an art, solving problems while elevating user experiences. Join me in reshaping the digital landscape, one beautifully crafted project at a time.
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
        <HireMe/>
        
      </section>
      <TabOption/>
    </>
  );
};

export default HeroSection;


