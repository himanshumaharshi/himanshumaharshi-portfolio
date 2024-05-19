import React from "react";

const RenderExperienceList = ({
  experiences,
  onInstituteClick,
  selectedId,
}) => {
  return (
    <ul className="flex md:flex-col">
      {experiences.map((experience) => (
        <li
          key={experience.id}
          onClick={() => onInstituteClick(experience.id)}
          className={` ${
            selectedId === experience.id ? "rounded-md bg-zinc-800" : ""
          }`}
          style={{
            cursor: "pointer",
            padding: "5px 0",
          }}
        >
          <div className="px-4 py-2 text-zinc-400 relative z-20 min-w-28 w-full text-left flex flex-row space-x-2 items-center group">
            <div className="bg-red-500 p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
              <img
                alt="Arya"
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0 bg-transparent transition duration-200"
                src={experience.companyLogo}
              />
            </div>
            <span>{experience.handle}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RenderExperienceList;
