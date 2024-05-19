import React from "react";

const MeteorDesign = () => {
  return (
    <div>
      <div className="absolute -left-6 w-px h-full bg-zinc-800 overflow-hidden">
        <span
          className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] before:bg-gradient-to-l before:from-transparent before:via-blue-500 before:to-cyan-500 style_meteor__wbUQa -left-0"
          style={{
            visibility: "hidden",
            "--meteor-delay": "2s",
            "--meteor-duration": "1s",
            "--meteor-width": "86px",
          }}
        ></span>
      </div>
    </div>
  );
};

export default MeteorDesign;
