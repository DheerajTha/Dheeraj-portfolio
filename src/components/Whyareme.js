import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="container mx-auto  items-center px-8 py-16 sm:flex-row-reverse sm:px-12">
        <div>
          <div class="hidden h-60 relative w-full xl:flex justify-center items-center">
            <h1 class="absolute top-0  text-9xl font-bold text-secondary z-0 ">
              &lt;About /&gt;{" "}
            </h1>
            <h1 class="text-dark font-extrabold text-9xl z-20 whitespace-nowrap">
            how can I help you?
            </h1>
          </div>
        </div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)} className="text-base sm:text-2xl text-slate-700 border-b-2">
            1. Passionate Craftsmanship?
          </AccordionHeader>
          <AccordionBody>
            In the dynamic world of web development, my passion is the driving
            force behind every project I undertake. With a year of hands-on
            experience, I&apos;ve cultivated a deep love for coding that
            transcends mere technical proficiency. Each line of code is infused
            with a sense of artistry and dedication, resulting in digital
            creations that captivate and inspire. From conceptualization to
            execution, my unwavering passion ensures that your project receives
            the attention and care it deserves, delivering results that exceed
            expectations.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)} className="text-base sm:text-2xl text-slate-700 border-b-2">
            2. Innovative Approach?
          </AccordionHeader>
          <AccordionBody>
            Innovation is not just a buzzword for me; it&apos;s a guiding
            principle that shapes my every action. With a curious mind and a
            thirst for knowledge, I m constantly exploring new technologies and
            techniques to push the boundaries of what&apos;s possible in web
            development. Whether it&apos;s experimenting with cutting-edge
            frameworks or finding creative solutions to complex challenges, my
            innovative approach ensures that your project stays ahead of the
            curve and stands out in the crowded digital landscape.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className="text-base sm:text-2xl text-slate-700 border-b-2">
            3. Creative Excellence?
          </AccordionHeader>
          <AccordionBody>
            At the intersection of creativity and technology lies the essence of
            my work. I believe that great web development is more than just
            lines of code; it&apos;s about crafting immersive digital
            experiences that leave a lasting impression. With a keen eye for
            design and a meticulous attention to detail, I strive to create
            websites that not only look stunning but also function flawlessly.
            From sleek user interfaces to seamless navigation, my commitment to
            creative excellence ensures that your project not only meets but
            exceeds your expectations.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className="text-base sm:text-2xl text-slate-700 border-b-2">
            4. Client-Centric Collaboration?
          </AccordionHeader>
          <AccordionBody>
            Your satisfaction is my top priority, and collaboration is the key
            to success. I approach each project as a collaborative partnership,
            listening attentively to your needs and goals to ensure that the
            final product reflects your vision and objectives. Whether
            you&apos;re a small business looking to establish your online
            presence or a large corporation in need of a custom web solution,
            I&apos;m here to help. Together, we&apos;ll embark on a journey of
            creativity, innovation, and success, bringing your digital dreams to
            life.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
