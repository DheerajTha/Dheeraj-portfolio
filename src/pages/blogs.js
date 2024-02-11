import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Transition from "@/components/Transition";

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

const Blogs = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
    <Transition/>
      <div className="container mx-auto  items-center px-8 py-16 sm:flex-row-reverse sm:px-12">
        <div>
          <div class="hidden h-60 relative w-full xl:flex justify-center items-center">
            <h1 class="absolute top-0  text-9xl font-bold text-secondary z-0 ">
              &lt;Blogs /&gt;{" "}
            </h1>
            <h1 class="text-dark font-extrabold text-9xl z-20 whitespace-nowrap">
              Dheeraj Thakur
            </h1>
          </div>
          <h2 className="text-lg">
            Welcome to the exciting world of web development! If you&apos;re just
            starting, HTML (HyperText Markup Language) is your gateway to
            creating stunning websites. In this comprehensive guide, we&apos;ll walk
            you through the basics of HTML and show you how to leverage its
            power to build engaging web pages.
          </h2>
        </div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            1. What is HTML?
          </AccordionHeader>
          <AccordionBody>
            HTML is the backbone of the web. It provides the structure and
            layout for your content, making it an essential language for any
            aspiring web developer. Learn about HTML tags, elements, and the
            building blocks of a well-structured webpage.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            2. HTML Syntax Made Simple
          </AccordionHeader>
          <AccordionBody>
            Don&apos;t be intimidated by code! We break down HTML syntax into
            easy-to-understand chunks, making it accessible for beginners.
            Discover the significance of opening and closing tags and how to
            create a clean and error-free HTML document.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            3. Building Blocks - Common HTML Elements
          </AccordionHeader>
          <AccordionBody>
            Explore fundamental HTML elements that form the core of every
            webpage. From headings and paragraphs to lists and links,
            understanding these elements is crucial for creating content-rich
            and user-friendly websites.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            4: Enhancing Your Web Pages with Multimedia
          </AccordionHeader>
          <AccordionBody>
            Learn how to embed images, videos, and audio into your HTML
            documents to make your content more engaging and interactive. Master
            the art of multimedia integration to captivate your audience.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            5: Crafting Forms for User Interaction
          </AccordionHeader>
          <AccordionBody>
            Unlock the potential of HTML forms to gather user input effectively.
            Whether it&apos;s a simple contact form or a complex survey, we guide you
            through creating forms that enhance user interaction and data
            collection.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(6)}>
            6: Best Practices for SEO-Friendly HTML
          </AccordionHeader>
          <AccordionBody>
            Optimize your HTML code for search engines to ensure your website
            ranks high in search results. From choosing meaningful title tags to
            crafting descriptive meta descriptions, we cover essential SEO
            practices to boost your website&apos;s visibility.
          </AccordionBody>
        </Accordion>

        <div className="my-4">
          <h2 className="text-2xl">
            Conclusion: Empower Your Web Development Journey with HTML{" "}
          </h2>
          <p>
            Congratulations! You&apos;ve taken your first steps into the world of
            HTML. Armed with this knowledge, you&apos;re well on your way to creating
            visually appealing and functional websites. Stay tuned for more
            in-depth guides as you continue your web development adventure.
            <br />
            Remember, practice is key, so roll up your sleeves, dive into the
            code, and let your creativity flourish!
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
