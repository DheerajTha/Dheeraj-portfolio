import Image from 'next/image';
import React from 'react'

const Skill = () => {

  const expe = [
    {
        Image: "/Images/Html.png",
        alt: "html",        
    },
    {
      Image: "/Images/Css.png",
      alt: "Css",        
  },
  {
    Image: "/Images/Bootstrap.png",
    alt: "Bootstrap",        
},
  {
    Image: "/Images/Tailwind.png",
    alt: "Tailwind",        
},
{
  Image: "/Images/React.png",
  alt: "React Js",        
},
{
  Image: "/Images/Next.png",
  alt: "Next js",        
},
{
  Image: "/Images/Sql.png",
  alt: "SQL",        
},
{
  Image: "/Images/Wordpress.png",
  alt: "Wordpress",        
},
{
  Image: "/Images/Git.png",
  alt: "Git",        
},
{
  Image: "/Images/Github.png",
  alt: "Github",        
},

{
  Image: "/Images/Vs.png",
  alt: "Visual Code",        
},

{
  Image: "/Images/Subline.png",
  alt: "Subline Text",        
},


  ];

  return (
    <div>
      <section className="grid">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap  gap-y-36 ">
      {expe.map((item, i) => (
      <div className="lg:w-1/4 sm:w-1/2 p-4  bg-light">

        <div className="flex relative  bg-light">
          <Image alt="gallery" className="absolute inset-0 object-cover object-center" width={150} height={100} src={item.Image}/>
          
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}

export default Skill;