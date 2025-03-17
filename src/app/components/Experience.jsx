"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
 
];

const Experience = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    
    <section className="text-white" id="experience">
          <br />  <br />
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/experience.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-base lg:text-lg">
       - Company: Cognifyz Technologies - Intenship <br />
         Full-Stack Developer | 1 Month | Remote<br />
         Played a key role in designing and developing scalable web applications by building responsive user interfaces and implementing robust back-end services. Leveraged technologies such as React.js, Node.js, and MongoDB to create dynamic features and ensure seamless functionality across the application. <br /><br />


          </p>
          <div className="flex flex-row justify-start mt-8">
           
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Experience;
