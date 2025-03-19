"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java & C++</li>
        <li>Python</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>MySQL & MongoDB</li>
        <li>JavaScript</li>
        <li>MERN</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>College:</strong> Prestige Institute of Engineering Management & Research (PIEMR) <br />
          <strong>Course:</strong> B.Tech - Computer Science & Engineering (CSE) <br />
          <strong>Grade:</strong> 8.52 CGPA
        </li>
        <li>
          <strong>School:</strong> M.G.M Higher Secondary School <br />
          <strong>Class:</strong> 12th | <strong>Subject:</strong> PCM (Physics, Chemistry, Maths) | <strong>Grade:</strong> 83.2%
        </li>
        <li>
          <strong>School:</strong> M.G.M Higher Secondary School <br />
          <strong>Class:</strong> 10th | <strong>Grade:</strong> 83.8%
        </li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Student Placement Coordinator (SPC) | PIEMR (On-Campus)</li>
        <li>Technical Head | GeeksforGeeks (GFG) | PIEMR (On-Campus)</li>
        <li>Campus Ambassador | IIT Delhi | BITS Pilani | Remote</li>
        <li>UI/UX Designer (Figma) | FFDG Indore | 1-Month | On-Site</li>
        <li>ILH'24 | Finalist | National Level Hackathon</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section className="text-white" id="about">
      <br /> <br />
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={500} height={500} alt="About Me Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Software Engineer & AI & Software Developer with a passion for building scalable and intelligent 
            applications. I have experience working with React.js, MERN, MySQL, Java, C++, JavaScript, and Python. 
            I am a quick learner and always eager to explore new technologies. I thrive in collaborative environments 
            and enjoy solving complex problems to create innovative and efficient solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map(({ id, title }) => (
              <TabButton key={id} selectTab={() => setTab(id)} active={tab === id}>
                {title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
