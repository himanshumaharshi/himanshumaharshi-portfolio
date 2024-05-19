import React from "react";
import Footer from "../components/common/Footer";
import EducationDetails from "../components/core/Experience/Education/EducationDetails";
import MeteorDesign from "../components/core/Experience/MeteorDesign";
import WorkExperience from "../components/core/Experience/WorkExperience";

const Experience = () => {
  return (
    <div className="px-4 md:px-8 lg:px-18 mb-8 md:mt-24 overflow-auto select-none">
      <div
        className="space-y-8 max-w-7xl mx-auto opacity-100 transform-none"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="mx-8  lg:mx-10 ">
          <h2 className="text-3xl mt-8 md:text-4xl font-bold tracking-wide text-white sm:text-4xl  poppins-black-900">
            Experience
          </h2>
          <p className="mt-4 text-zinc-400 font-ubuntu tracking-tighter pb-6 border-b border-white/20"></p>
          <div className="flex flex-col mx-8 p-5 text-[#FF0090]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-3xl font-ubuntu">
              Work Experience
            </h2>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-1 max-w-2xl mx-auto">
            <div className="flex flex-row md:flex-col relative overflow-x-auto md:overflow-x-visible">
              <MeteorDesign />
            </div>
            
            <WorkExperience/>
          </div>

          {/* education */}
          <div className="flex flex-col mx-8 p-5 mt-5 text-[#FF0090]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-3xl font-ubuntu">
              Education
            </h2>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-1 max-w-2xl mx-auto">
            <div className="flex flex-row md:flex-col sm:flex-row relative overflow-x-auto md:overflow-x-visible">
              <MeteorDesign />
              <EducationDetails />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
