import React, { useState } from "react";
import Image from "../../assets/Himanshu Maharshi Circle Image.jpeg";
import ListBar from "../SVG/ListBar";
import CrossBtnSVG from "../SVG/CrossBtnSVG";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="absolute w-full z-20">
      <div className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8">
        <div className="hidden lg:flex w-full justify-center">
          <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800 ">
            {/* image and name */}
            <a
              className="font-bold text-sm flex items-center justify-center text-white space-x-2"
              href="/"
            >
              <img
                alt="img"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                className="transition duration-500 blur-0 scale-100 rounded-full border border-[#FFFF00]"
                src={Image}
              />
              <span className="freeman-regular tracking-widest font-bold">
                Himanshu
              </span>
            </a>
            <a href="/about" className="text-white text-sm relative">
              <span className="relative z-10 px-2 py-2 inline-block">
                About
              </span>
            </a>
            <a href="/experience" className="text-white text-sm relative">
              <span className="relative z-10 px-2 py-2 inline-block">
                Experience
              </span>
            </a>
            <a href="/skills" className="text-white text-sm relative">
              <span className="relative z-10 px-2 py-2 inline-block">
                Skills
              </span>
            </a>
            <a href="/projects" className="text-white text-sm relative">
              <span className="relative z-10 px-2 py-2 inline-block">
                Projects
              </span>
            </a>
            <a href="/certifications" className="text-white text-sm relative">
              <span className="relative z-10 px-2 py-2 inline-block">
                Certifications
              </span>
            </a>
{/*             <a
              href="http://rebrand.ly/himanshu-resume"
              target="blank" rel="noreferrer"
              className="text-white text-sm relative"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                Resume
              </span>
            </a> */}
          </div>
        </div>

        <div className="flex lg:hidden w-full text-white">
          <div className="flex flex-row justify-between items-center w-full">
            <a
              className="font-bold text-sm flex items-center justify-center text-white space-x-2"
              href="/"
            >
              <img
                alt="img"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                className="transition duration-500 blur-0 scale-100 rounded-full border border-[#FFFF00]"
                src={Image}
              />
              <span className="freeman-regular tracking-widest font-bold">
                Himanshu
              </span>
            </a>

            <div className="" onClick={toggleDropDown}>
              {isDropdownOpen ? <CrossBtnSVG /> : <ListBar />}
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute w-[18rem] bg-zinc-800 rounded-xl text-lg font-bold text-zinc-600 transition-all duration-200 top-[6rem] right-8 p-2 flex flex-col justify-center items-center">
              <a href="/about" className="text-white text-sm relative">
                <span className="relative z-10 px-2 py-2 inline-block">
                  About
                </span>
              </a>
              <a href="/experience" className="text-white text-sm relative">
                <span className="relative z-10 px-2 py-2 inline-block">
                  Experience
                </span>
              </a>
              <a href="/skills" className="text-white text-sm relative">
                <span className="relative z-10 px-2 py-2 inline-block">
                  Skills
                </span>
              </a>
              <a href="/projects" className="text-white text-sm relative">
                <span className="relative z-10 px-2 py-2 inline-block">
                  Projects
                </span>
              </a>
              <a href="/certifications" className="text-white text-sm relative">
                <span className="relative z-10 px-2 py-2 inline-block">
                  Certifications
                </span>
              </a>
{/*               <a
                href="http://rebrand.ly/himanshu-resume"
                target="blank" rel="noreferrer"
                className="text-white text-sm relative"
              >
                <span className="relative z-10 px-2 py-2 inline-block">
                  Resume
                </span>
              </a> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
