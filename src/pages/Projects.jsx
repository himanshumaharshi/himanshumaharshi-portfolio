import React from "react";
import ProjectCard from "../components/core/Projects/ProjectCard";
import Footer from "../components/common/Footer"

const Projects = () => {
  return (
    <>
      <div className="text-white px-4 md:px-8 mt-[8rem] lg:px-10 pb-8">
        <div className="space-y-8 max-w-7xl mx-auto poppins-500 opacity-100 transform-none">
          <div className="mx-8 lg:mx-10">
            <h1 className="text-3xl font-bold tracking-widest sm:text-4xl poppins-black-900">
              Projects
            </h1>
            <p className="mt-4 text-zinc-400 font-ubuntu tracking-tighter pb-6 border-b border-white/20"></p>

            <div className="flex flex-wrap justify-center gap-8 pr-12">
              <ProjectCard />
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Projects;
