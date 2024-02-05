import React from "react";
// import { IconMessageCircle, IconSettings } from "@tabler/icons-react";
import { Tabs, rem } from "@mantine/core";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";

const TabOption = () => {
  // const iconStyle = { width: rem(40), height: rem(12) };
  return (
    <div>
      <div className="container mx-auto px-16 pb-2">
        <h2 className="text-dark font-extrabold text-2xl"> 😎About Us </h2>
        <p className="text-primary text-2xl font-semibold">
          Hey there, I&apos; m Dheeraj Thakur{" "}
        </p>
        <p className="text-dark py-1">
          A dedicated web developer with a passion for creating digital
          experiences that harmoniously balance functionality and aesthetics.
        </p>
      </div>
      <Tabs
        color="dark"
        defaultValue="education"
        className="border p-4 mb-2 hover:shadow-black	shadow-violet-500	 shadow-sm container mx-auto px-16 pb-16 "
      >
        <div className="flex sm:flex-col md:items-center px-8 pb-5  sm:px-12">
          <Tabs.List className="py-2 container">
            <Tabs.Tab value="education">
              <h2 className="text-lg text-black font-semibold">Education</h2>
            </Tabs.Tab>
            <Tabs.Tab value="skill">
              <h2 className="text-lg text-black font-semibold">Skill</h2>
            </Tabs.Tab>
            <Tabs.Tab value="experience">
              <h2 className="text-lg text-black font-semibold">Experience</h2>
            </Tabs.Tab>
          </Tabs.List>
        </div>
        <Tabs.Panel value="education">
          <Education />
        </Tabs.Panel>

        <Tabs.Panel value="skill">
          <Skill/>
        </Tabs.Panel>

        <Tabs.Panel value="experience">
          <Experience/>
          </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TabOption;
