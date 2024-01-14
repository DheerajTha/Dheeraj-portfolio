import Image from "next/image";
import Link from "next/link";
import React from "react";
import hireme from "@/Assets/home hire me.png"

const HireMe = () => {
  return (
    <div className="fixed left-0 bottom-4 z-30 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          className="fill-dark animate-spin-slow"
          src={hireme}
          width={150}
          height={150}
          alt="Hire me"
          
        />
        <Link
          href="mailto:dk578206@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-lg  rounded-full text-light border-solid border-black w-20 h-20 hover:bg-violet-500  hover:text-white "
        >
          Hire Me
        </Link>
        
      </div>
    </div>
  );
};

export default HireMe;
