"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TechFusion",
    description: "Smart Employee Management System",
    technologies: " Java · Artificial Intelligence (AI) · HTML-CSS-JS · Java AWT · JDBC · Python · MySQL · Full-Stack Development",
    image: "/images/projects/first.png",
    tag: ["All", "AI & Blockchain"],
    gitUrl: "https://github.com/Krish-Patidar/TechFusion.git",
    previewUrl: "https://www.linkedin.com/posts/krish-patidar01_artificialintelligence-machinelearning-aiinnovation-activity-7300846910687383552-LCEx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWjHeQBjxp0a8ByFE8z9KYQoye8LOAfn84",
  },
  {
    id: 2,
    title: "BallotBlock",
    description: "Decentralized Voting System",
    technologies: "Smart Contracts · Blockchain · Ethereum · React.js · Web3 · Full-Stack Development",
    image: "/images/projects/second.png",
    tag: ["All", "AI & Blockchain"],
    gitUrl: "https://github.com/Krish-Patidar/BallotBlock.git",
    previewUrl: "https://www.linkedin.com/posts/krish-patidar01_blockchain-ethereum-decentralizedvoting-activity-7271081353725517824-LXN3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWjHeQBjxp0a8ByFE8z9KYQoye8LOAfn84",
  },
  {
    id: 3,
    title: "NeighborhoodFinds",
    description: "E-Commerce",
    technologies: "HTML-CSS · PHP · JavaScript · phpMyAdmin · Full-Stack Development",
    image: "/images/projects/third.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Krish-Patidar/NeighborhoodFinds.git",
    previewUrl: "https://www.linkedin.com/posts/krish-patidar01_project-webdevelopment-projectcompletion-activity-7195321314008559616-atGg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWjHeQBjxp0a8ByFE8z9KYQoye8LOAfn84",
  },
  {
    id: 4,
    title: "SeniorMitra",
    description: "Connecting Seniors Socially",
    technologies: "HTML · CSS · JavaScript · Front-end Development",
    image: "/images/projects/fourth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Krish-Patidar/SenoirMitra.git",
    previewUrl: "https://www.linkedin.com/posts/krish-patidar01_bytesquad-hackathon-teamwork-activity-7241337310041018368-ltZ3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWjHeQBjxp0a8ByFE8z9KYQoye8LOAfn84",
  },
  {
    id: 5,
    title: "IconicThreads",
    description: "E-commerce Fashionable Website",
    technologies: "HTML · CSS · JavaScript · Front-end Development",
    image: "/images/projects/fifth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Krish-Patidar/IconicThreads.git",
    previewUrl: "https://www.linkedin.com/posts/krish-patidar01_hackathon-36hourcoding-teamwork-activity-7274677004208087041-PbUR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWjHeQBjxp0a8ByFE8z9KYQoye8LOAfn84",
  },
  {
    id: 6,
    title: "Planify",
    description: "Event Management System",
    technologies: "Node.js · React.js · MongoDB · MERN Stack · Full-Stack Development",
    image: "/images/projects/sixth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Krish-Patidar/Planify.git",
    previewUrl: "https://www.linkedin.com/posts/krish-patidar01_hackathon-mernstack-techxlr8-activity-7290585007562104833-1D1_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWjHeQBjxp0a8ByFE8z9KYQoye8LOAfn84",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <br /><br /><br />
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI & Blockchain"
          isSelected={tag === "AI & Blockchain"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
