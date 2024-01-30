import React from "react";
// import { FaLaptopCode } from "react-icons/fa";
// import { FaBook } from "react-icons/fa";


const Experience = () => {
    const expe = [
        {
            title: "Web Development@wpi",
            heading: "July 2023 - Present",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",          
        },
        {
            title: "Software Engineer  @Appnox",
            heading: "April 2023 - June",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",          
        },
        {
            title: "Intern @Adesocail",
            heading: "April 2023 - June",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",          
        },
        {
            title: "Intern @Adesocail",
            heading: "April 2023 - June",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",          
        },
        
       
        
      ];
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
              <div className="flex-shrink-0 w-24 h-24 bg-purple-900 text-purple-500 rounded-full inline-flex items-center justify-center">
                {/* <FaLaptopCode size={70} /> */}
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0"> 
            {expe.map((item, i) => (
            <span className="flex-grow sm:pl-6 mt-6 sm:mt-0 " key={i}>
              <h2 className="font-medium title-font text-dark mb-1 text-2xl lg:text-4xl">
                  {item.title}
              </h2>
              <h2 className="text-2xl md:text-3xl mb-5">{item.heading}</h2>
              <p className="text-md md:text-l ">{item.description}</p>
              
            </span>
          ))}
              </div>
            </div>
          </div>
          
          
        </div>
      </section>
    </>
  );
};

export default Experience;
