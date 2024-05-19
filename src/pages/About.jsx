import React from "react";
import Image from "../assets/Himanshu Maharshi Circle Image.jpeg";
import SocialIcons from "../components/core/AboutPage/SocialIcon";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <>
      <div className="px-4 mt-[6rem] md:px-8 lg:px-18 mb-8 md:mt-24 sm:mt-[6.5rem] overflow-auto select-none">
        <div className="space-y-8 max-w-7xl mx-auto opacity-100 transform-none">
          {/* header */}
          <div>
            <h2 className="text-3xl mt-8 md:text-4xl font-bold tracking-wide text-white sm:text-4xl  poppins-black-900">
              About Me
            </h2>
            <p className="mt-4 text-zync-400 font-ubuntu-regular tracking-tighter pb-6 border-b border-white/20"></p>
          </div>
          {/* hero section */}
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-10 md:flex md:justify-between items-center akaya-kanadaka-regular">
            {/* name and short description */}
            <div className="w-full md:w-3/5">
              <h1 className="font-bold text-4xl md:text-5xl md:leading-thight text-zinc-50">
                Hey! I'm <span className="text-[#FF0090]"> Himanshu </span> and
                I'm a Software Engineer
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl text-justify mt-8 md:leading-relaxed tracking-wide">
                Since childhood, I have been passionate about technology. My
                fascination with personal computers began, like many others,
                with playing computer games on my old PC. This interest soon
                evolved into self-teaching myself how to code. Fast forward a
                few years, I am now a proficient software developer with an
                insatiable drive to create aesthetically pleasing websites and
                highly functional applications.
              </p>
            </div>
            {/* image */}
            <div className="w-full md:w-2/5 flex flex-col items-center mt-8 md:mt-0">
              <div className="w-[250px] md:w-[300px] h-[250px] md:h-[300px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <img
                  src={Image}
                  alt="img"
                  loading="lazy"
                  width="300"
                  height="300"
                  decoding="async"
                  data-nimg="1"
                  className="rounded-full bg-transparent border"
                />
              </div>
              {/* social media logos */}
              <div className="text-zinc-500 mt-5 text-sm relative">
                <span className="relative z-10 p-4 inline-block">
                  <SocialIcons />
                </span>
              </div>
            </div>
          </div>
          <div class="max-w-5xl mx-auto space-y-8 akaya-kanadaka-regular">
            <p class="text-zinc-400 text-lg md:text-xl text-justify mt-8 md:leading-loose tracking-wide">
            I am a recent graduate with a background in Computer Science and Engineering, I possess exceptional problem-solving abilities, particularly in Data Structures and Algorithms using C++ programming. Additionally, I have expertise in MERN stack development.
            </p>
          </div>
          {/* funfact */}
          <div className="max-w-5xl mx-auto mt-[5rem] space-y-8 akaya-kanadaka-regular text-2xl">
            <article className="text-[#d1d3d6be]">
              <span className="text-[#FF0090] mr-3 font-bold">Fun Fact:</span>{" "}
              When I wrote this code, only God and I understood what I did. Now
              only God knows.
            </article>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;
