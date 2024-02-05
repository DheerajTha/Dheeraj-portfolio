import React from "react";
import { FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
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
                <FaCode size={70} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-dark mb-1 text-2xl lg:text-4xl">
                  Web Development@wpi
                </h2>
                <h2 classNameName="text-dark"> July 2023 - Present</h2>
                <p classNameName="leading-relaxed text-dark">
                As a dedicated Web Developer at Web Development@wpi, I contribute to the creation of cutting-edge digital solutions. Engaging in the full development lifecycle, I collaborate with a dynamic team to deliver web applications that seamlessly blend functionality and aesthetics. </p>
              </div>
            </div>
          </div>
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dark text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
                <FaCode size={70} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-dark mb-1 text-2xl lg:text-4xl">
                  Software Engineer @Appnox
                </h2>
                <h2 classNameName="text-dark"> April 2023 - June</h2>
                <p classNameName="leading-relaxed text-dark">
                As a Software Engineer at Appnox, I am actively involved in the development and enhancement of cutting-edge software solutions. Working collaboratively within a dynamic team, I contribute to the design and implementation of robust and scalable applications.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dark text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
                <FaCode size={70} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-dark mb-1 text-2xl lg:text-4xl">
                  Intern @Adesocail
                </h2>
                <h3 classNameName="text-dark text-5xl	 mb-5">
                  {" "}
                  April 2023 - June 2022
                </h3>
                <p classNameName="leading-relaxed text-dark">
                During my internship at Adesocail, I had the opportunity to immerse myself in the dynamic world of web development. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
