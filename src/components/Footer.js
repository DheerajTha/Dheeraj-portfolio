"use client"
import React from 'react'
import { Typography } from "@material-tailwind/react";


const Footer = () => {
  return (


    <>
    
    <footer className="flex w-full px-10 flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal sm:text-2xl text-base">
         CopyRight &copy; By <span className='text-primary font-bold'> Dheeraj Thakur</span> 2024
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            color="blue-gray"
            className="font-normal transition-colors sm:text-lg text-base hover:text-blue-500 focus:text-blue-500"
          >
           Built By ❤️‍🔥 Dheeraj Thakur 
          </Typography>
        </li>
        
        
        
      </ul>
    </footer>
    </>
  )
}

export default Footer;


