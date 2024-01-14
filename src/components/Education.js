import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaBook } from "react-icons/fa";


const Education = () => {
  return (
    <>
      <section classNameName="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dark text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
                <FaLaptopCode size={70} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-dark mb-1 text-2xl lg:text-4xl">
                  Bachelor Of Computer Application
                </h2>
                <h2 classNameName="text-dark"> 2018-2021 | Singhania University</h2>
                <p classNameName="leading-relaxed text-dark">
                  Exploring the principles of Data Structures and Algorithms,
                  immersing in the complexities of Computer Systems Engineering,
                  and delving into the realms of Artificial Intelligence have
                  been pivotal elements of my academic journey, shaping a strong
                  foundation for web development innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dark text-white relative z-10 title-font font-medium text-sm">
                2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              <FaBook size={60} />

              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-dark mb-1 text-2xl lg:text-4xl">
                Higher Secondary
                </h2>
                <p className="leading-relaxed">
                My Higher Secondary education with a focus on Physics, Chemistry, and Mathematics (PCM) serves as the bedrock of my analytical thinking and problem-solving skills. This strong foundation not only shaped my logical approach during academic pursuits but also seamlessly aligns with the precision and attention to detail required in web development.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Education;
