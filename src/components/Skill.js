import Image from "next/image";
import React from "react";

const Skill = () => {
  const expe = [
    {
      Image: "/Images/Html.png",
      alt: "html",
      title: "HTML",
    },
    {
      Image: "/Images/Css.png",
      alt: "Css",
      title: "CSS",

    },
    {
      Image: "/Images/Bootstrap.png",
      alt: "Bootstrap",
      title: "BOOTSTRAP",

    },
    {
      Image: "/Images/Tailwind.png",
      alt: "Tailwind",
      title: "TAILWIND",

    },
    {
      Image: "/Images/React.png",
      alt: "React Js",
      title: "REACT JS",

    },
    {
      Image: "/Images/Next.png",
      alt: "Next js",
      title: "NEXT JS",

    },
    {
      Image: "/Images/Sql.png",
      alt: "SQL",
      title: "SQL",

    },
    {
      Image: "/Images/Wordpress.png",
      alt: "Wordpress",
      title: "WORDPRESS",

    },
    {
      Image: "/Images/Git.png",
      alt: "Git",
      title: "GIT",

    },
    {
      Image: "/Images/Github.png",
      alt: "Github",
      title: "GITHUB",

    },

    {
      Image: "/Images/Vs.png",
      alt: "Visual Code",
      title: "VISUAL CODE",

    },

    {
      Image: "/Images/Subline.png",
      alt: "Subline Text",
      title: "SUBLINE TEXT",

    },
  ];

  return (
    <div>
      <section class="text-gray-600 bg-gray-100	 body-font">
        <div class=" px-5 py-20">
          <div class="flex flex-wrap   ">
            {expe.map((item, i) => (
              <div class="lg:w-1/4 md:w-1/2 p-4  w-full" key={i}>
                <a class="block relative  rounded-lg  overflow-hidden">
                  <Image
                    alt={item.alt}
                    class="object-cover object-center "
                    width={150}
                    height={100}
                    src={item.Image}
                    
                  />
                </a>
                <div class="mt-4 ">
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
