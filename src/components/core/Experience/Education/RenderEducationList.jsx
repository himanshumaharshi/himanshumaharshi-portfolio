import React from "react";

const RenderEducationList = ({ educations, onInstituteClick, selectedId }) => {
  return (
    <ul className="flex md:flex-col">
      {educations.map((education) => (
        <li
          key={education.id}
          onClick={() => onInstituteClick(education.id)}
          className={` ${selectedId === education.id ? "rounded-md bg-zinc-800" : ""}`}
          style={{
            cursor: "pointer",
            padding: "5px 0",
          }}
        >
          <div className="px-4 py-2 text-zinc-400 relative z-20 min-w-28 w-full text-left flex flex-row space-x-2 items-center group">
            {education.handle}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RenderEducationList;
