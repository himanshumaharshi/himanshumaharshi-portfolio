import React from "react";
import { TypeAnimation } from "react-type-animation";
const TextAnimation = () => {
  return (
    <div className="noto-sans-600 select-none tracking-wide">
      {" "}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Software Developer",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "MERN Stack Developer",
        ]}
        wrapper="span"
        speed={5}
        style={{  display: "inline-block", animation: "ease"}}
        repeat={Infinity}
        cursor={false}
        
      />
    </div>
  );
};

export default TextAnimation;
