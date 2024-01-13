import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { MdSort } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const MotionLink = motion(Link);

const Navbar = () => {
  const [toggle, settoggle] = useState(false);



  return (
    <>
      <header
        className="w-full bg-light hidden border-b-2 lg:block sticky z-[1] top-0 "
      >
        <div className=" mx-auto container flex flex-row  items-center justify-around py-5">
          <Link href={"/"} className="link animated inAndOut">
            Home
          </Link>
          <Link href={"/services"} className="link animated inAndOut">
            Our Services
          </Link>
          <Link href={"/"} className="link animated inAndOut">
            Happy Clients
          </Link>
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
          <Link href={"/project"} className="link animated inAndOut">
            Our Projects
          </Link>
          <Link href={"/about"} className="link animated inAndOut">
            About us
          </Link>
          <Link href={"/contact-us"} className="link animated inAndOut">
            Contact us
          </Link>
        </div>
      </header>

      <div
        className="flex justify-between items-center py-4 px-3 lg:hidden sticky z-[1] top-0 shadow-primary bg-bg-color"
      >
        <MdSort
          onClick={() => settoggle(!toggle)}
          size={45}
          className="  text-secondary transition-all duration-1000 ease-out lg:hidden"
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
          className="  text-secondary transition-all duration-1000 ease-out lg:hidden"
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
            <Link
              href={"/"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              Home
            </Link>
            <Link
              href={"/services"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              Our Services
            </Link>
            <Link
              href={"/"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              Happy Clients
            </Link>

            <Link
              href={"/project"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              Our Projects
            </Link>
            <Link
              href={"/about"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              About us
            </Link>
            <Link
              href={"/contact-us"}
              className="links  inAndOut py-5"
              onClick={() => settoggle(!toggle)}
            >
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
