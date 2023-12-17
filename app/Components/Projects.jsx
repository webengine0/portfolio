import React from "react";

import ProjectItem from "./ProjectItem";
// import propertyImg from "/assets/projects/property.jpg";
const Projects = () => {
  return (
    <div id="Projects" className="w-full select-none">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="property finder"
            backgroundImg="/assets/projects/property.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
