"use client";
import React, { useState, useRef } from "react";
import GalleryCard from "./GalleryCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "",
    description: "",
    technologies: "",
    image: "/images/projects/gallery1.jpg",
    tag: ["All", "AI & Blockchain"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "",
    description: "",
    technologies: "",
    image: "/images/projects/gallery2.jpg",
    tag: ["All", "AI & Blockchain"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "",
    description: "",
    technologies: "",
    image: "/images/projects/gallery3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "",
    description: "",
    technologies: "",
    image: "/images/projects/gallery4.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
    <section id="gallery">
        <br /><br /><br /><br />
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Gallery
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <GalleryCard
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
