import React from "react";
import ArrowRightSVG from "../../SVG/ArrowRightSVG";

const RenderExperienceData = ({ experience }) => {
  return (
    <div>
      <div className="md:pl-10  flex-1">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col opacity-100 space-y-2">
            <h1 className="text-2xl font-bold text-zinc-100">
              {experience.position}{" "}
              <span className="text-[#FF0090]">{experience.company}</span>
            </h1>
            <div className="text-zinc-400 text-sm tracking-widest">
              {experience.duration}
            </div>
            <p className="text-zinc-400 text-sm">{experience.location}</p>
            <div>
              <div className="flex flex-col text-justify items-start my-2">
                {experience.description.map((desc, index) => (
                  <div className="flex p-1 gap-2">
                    {<ArrowRightSVG />}
                    <span className="text-zinc-400 text-sm flex flex-row">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderExperienceData;
