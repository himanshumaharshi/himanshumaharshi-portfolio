import React from "react";
import TextAnimation from "../components/common/TextAnimation";

const Home = () => {
  const handleOnClick = () => {
    window.open("https://www.linkedin.com/in/himanshumaharshi/", "_blank");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden text-white select-none tracking-widest">
        <div>
          <h1 className="satisfy z-[3] text-[clamp(4rem,8vw,6rem)] whitespace-nowrap p-[clamp(1rem,2vw,3rem)] rounded-[clamp(0.4rem,0.75rem,1rem)] transform-none text-shadow shadow-[#87CEFA]">
            Himanshu
          </h1>
        </div>

        <div className="text-center text-base sm:text-xl md:text-3xl lg:text-5xl font-bold">
          <div className="flex flex-col md:flex-row items-center">
            <p className="mt-3 noto-sans-600 text-[3rem] relative mr-[30rem] font-semibold flex items-center">
              I'm a
            </p>
            <span className="absolute mt-3 ml-[8.5rem] text-[#FFD700] text-shadow-sm shadow-white">
              <TextAnimation />
            </span>
          </div>
        </div>

        <div className="border shadow-lg hover:shadow-indigo-500/50 mt-10 w-40 md:w-48 h-16 flex items-center justify-center font-bold rounded-full hover:bg-[#F0F8FF] hover:text-[#010B13]">
          <button onClick={() => handleOnClick()}>Contact Me</button>
        </div>
      </div>
    </>
  );
};

export default Home;
