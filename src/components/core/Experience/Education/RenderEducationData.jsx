import React from "react";

const RenderEducationData = ({ education }) => {
  return (
    <div>
      <div className="md:pl-10  flex-1">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2 opacity-100">
            <h1 className="text-2xl font-bold text-zinc-100">
              {education.course}{" "}
              <span className="text-[#FF0090]">{education.institute}</span>
            </h1>
            <div className="text-zinc-400 text-sm tracking-widest">
              {education.duration}
            </div>
            <p className="text-zinc-400 text-sm">{education.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderEducationData;
