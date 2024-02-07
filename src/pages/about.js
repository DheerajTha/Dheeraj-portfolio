import Image from "next/image";
import React from "react";
import About from "@/Assets/About.jpeg";

const about = () => {
  return (
    <section class="text-dark ">
     
      <div className="w-full flex md:flex-row h-60 py-4 items-center justify-center">
        <h1 className="text-dark text-4xl md:text-7xl sm:text-4xl text-center font-bold title-font">
          Where Creativity Meets Code.
        </h1>
      </div>

      <div class="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 -mt-8 flex flex-col md:items-start md:text-left  md:mb-0  text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-dark">
            😍 BIO
          </h1>
          <p class=" leading-relaxed text-dark">
            Greetings! I&apos;m Dheeraj Thakur, a seasoned web developer with a year
            of hands-on experience in crafting digital wonders. My journey in
            the dynamic world of web development began with a spark of curiosity
            and a drive to innovate. From the outset, I was captivated by the
            endless possibilities of the digital realm, and I embarked on a
            quest to turn ideas into engaging online experiences. With a
            meticulous approach to my craft, I&apos;ve honed my skills in both
            front-end and back-end development. Conceptualizing sleek user
            interfaces and meticulously coding robust backend systems have
            become second nature to me. Each line of code is a brushstroke on
            the canvas of the web, where creativity and precision converge to
            create digital masterpieces. In the realm of ones and zeros, I
            navigate with a keen eye for detail, striving for both aesthetic
            excellence and seamless functionality. My commitment to excellence
            is unwavering, and I&apos;m constantly pushing the boundaries of what&apos;s
            possible in web development. Staying at the forefront of industry
            trends is not just a goal but a passion of mine, as I believe that
            innovation is the key to staying relevant in this ever-evolving
            landscape. Each project I undertake is not just a task but a
            testament to my dedication to the craft. Whether it&apos;s a small-scale
            website or a complex web application, I approach each endeavor with
            the same level of enthusiasm and determination. My goal is not just
            to meet expectations but to exceed them, delivering solutions that
            leave a lasting impression. Join me as we embark on a digital
            journey where innovation meets precision, and together, we&apos;ll bring
            your vision to life. Whether you &apos;;re a small business looking to
            establish your online presence or a large corporation in need of a
            custom web solution, I &apos;m here to help. Let&apos;s collaborate and create
            something extraordinary that will stand the test of time in the vast
            digital landscape.
          </p>
        </div>
        <div class="lg:max-w-lg relative md:w-1/2 w-5/6 flex items-center justify-center border-l-2 border-r-8 border-b-8 p-2 border-t-2 rounded-2xl  border-black	">
          <Image
            class="object-cover object-center rounded-2xl m-4"
            alt="About me"
            width={500}
            height={250}
            src={About}
          />
        </div>
      </div>
    </section>
  );
};

export default about;
