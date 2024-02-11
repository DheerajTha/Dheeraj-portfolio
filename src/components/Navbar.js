import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { MdSort } from "react-icons/md";
import {  useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";


const MotionLink = motion(Link);

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <header
        className="w-full mx-5 bg-light hidden border-b-2 lg:block sticky z-[30] top-0 "
      >
        <div className=" mx-auto container flex flex-row  items-center justify-between py-5">
          <MotionLink href={"/"} className="link animated inAndOut">
            Home
          </MotionLink>
          <MotionLink href="/about" className="link animated inAndOut">
            About
          </MotionLink>
          <MotionLink href={"/project"} className="link animated inAndOut">
            projects
          </MotionLink>
          <MotionLink href={"/blogs"} className="link animated inAndOut">
            Blogs  
          </MotionLink>
          <nav class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
            <MotionLink
              href="/"
              class="bg-dark w-16 h-16   flex items-center justify-center font-bold text-2xl text-light rounded-full"
              whileHover={{
                background: [
                  "#121212",
                  "#EE82EE",
                  "#FFB6C1",
                  "#FFA500",
                  "#FFFF00",
                ],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              DT
            </MotionLink>
          </nav>
          
          <Link className=" gap  ball" href="https://github.com/DheerajTha" target={"_blank"}>
                <FaGithub size={25} />
              </Link>
              <Link className="" href="https://www.facebook.com/dheeraj.thakur.5243817" target={"_blank"}>
                <FaFacebookF size={25} />
              </Link>
              <Link className="" href="https://www.instagram.com/developer_dheeraj.thakur/" target={"_blank"}>
                <FaInstagram size={25} />
              </Link>
              <Link className="" href="https://www.linkedin.com/in/dheeraj-thakur-0b7033226/" target={"_blank"}>
                <FaLinkedin size={25} />
              </Link>
        
        </div>
      </header>
      <div
        className="flex justify-between bg-light items-center py-4 px-3 lg:hidden sticky z-[30] top-0 shadow-primary bg-bg-color"
      >
        <MdSort
          onClick={() => settoggle(!toggle)}
          size={45}
          className="  text-dark transition-all duration-1000 ease-out lg:hidden"
        />

        <div>
          <MotionLink
            href="/"
            class="bg-black w-16 h-16   flex items-center justify-center font-bold text-2xl text-light rounded-full"
            whileHover={{
              background: [
                "#121212",
                "#EE82EE",
                "#FFB6C1",
                "#FFA500",
                "#FFFF00",
              ],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            DT
          </MotionLink>
        </div>

        <BsTelephone
          onClick={() => settoggle(!toggle)}
          size={35}
          className="  text-dark transition-all duration-1000 ease-out lg:hidden"
        />
      </div>
      <nav
        className={`duration-700 
           translate-y-2.5  lg:hidden top-[-10px] fixed z-30 w-full text-center  mobile-menu border-none
          ${toggle ? "right-[0%]" : "right-[-100%]"} `}
      >
        <div className="h-screen bg-dark grid justify-center items-center text-secondary relative">
          <HiOutlineX
            onClick={() => settoggle(!toggle)}
            size={45}
            className=" absolute top-5 left-5 z-10 text-secondary"
          />

          <div>
            <MotionLink
              href={"/"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              Home
            </MotionLink>
            <MotionLink
              href={"/about"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              About
            </MotionLink>
            <MotionLink
              href={"/project"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              Project
            </MotionLink>

            <MotionLink
              href={"/blogs"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              Blogs
            </MotionLink>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
