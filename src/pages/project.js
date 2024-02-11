import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";
import ProjectCard from "@/components/Projectcard.js";

import React from "react";
import Transition from "@/components/Transition";

const Project = () => {
  const testimonials = [
    {
      image: "/Images/indic.jpeg",
      title: "IndicTechnologies",
      tech: [SiNextdotjs, SiExpress, SiMongodb, SiNodedotjs, SiVercel],
    },
    {
      image: "/Images/project1.png",
      title: "Event07",
      tech: [SiNextdotjs, SiExpress, SiMongodb, SiNodedotjs, SiVercel],
    },
    {
      image: "/Images/project2.png",
      title: "Events4You",
      tech: [SiNextdotjs, SiExpress, SiMongodb, SiNodedotjs, SiFirebase],
    },
    {
      image: "/Images/project4.png",
      title: "Sakshi events",
      tech: [SiNextdotjs, SiExpress, SiMongodb, SiNodedotjs, SiVercel],
    },
  ];

  return (
    <>
      <Transition/>
      <div className="container text-secondary px-5 mx-auto pt-20">
        <div class="hidden h-60 relative w-full xl:flex justify-center items-center">
          <h1 class="absolute top-0  text-9xl font-bold text-secondary z-0 ">
            &lt;About /&gt;{" "}
          </h1>
          <h1 class="text-dark font-extrabold text-9xl z-20 whitespace-nowrap">
            Project
          </h1>
        </div>
        <h2 className="text-start px-4 text-dark text-4xl mb-10 font-extrabold">
          OUR PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <ProjectCard
              key={i}
              image={item.image}
              title={item?.title}
              tech={item?.tech}
              liveLink={item?.liveLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
