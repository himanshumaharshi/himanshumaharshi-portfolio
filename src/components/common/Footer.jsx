import React from "react";
import Image from "../../assets/Himanshu Maharshi Circle Image.jpeg";
import LinkedInSVG from "../SVG/LinkedInSVG";
import LeetcodeSVG from "../SVG/LeetcodeSVG";
import InstagramSVG from "../SVG/InstagramSVG";
import XSVG from "../SVG/XSVG";
import GithubSVG from "../SVG/GithubSVG";

const Footer = () => {
  return (
    <div className="text-white mt-[3rem] sm:mt-[4rem]">
      <div className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8">
        {/* image and name */}
        <a
          href="/"
          className="font-bold sm:text-sm flex items-center justify-center text-white space-x-2 text-xl"
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
          <span className="freeman-regular tracking-widest font-bold text-white text-xl ">
            Himanshu
          </span>
        </a>

        {/* links */}
        <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <a href="/about" className="text-white text-sm relative">
            <span className="relative z-10 px-2 py-2 inline-block">About</span>
          </a>
          <a href="/experience" className="text-white text-sm relative">
            <span className="relative z-10 px-2 py-2 inline-block">
              Experience
            </span>
          </a>
          <a href="/skills" className="text-white text-sm relative">
            <span className="relative z-10 px-2 py-2 inline-block">Skills</span>
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
        </div>

        <p className="text-zinc-200 text-sm font-light text-center mt-8 border-t border-zinc-800 pt-4">
          © 2024 Himanshu Maharshi
        </p>

        <div class="flex flex-row justify-center space-x-2 mt-4">
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/himanshumaharshi/"
            className="text-zinc-500 text-sm relative"
            target="__blank"
          >
            <span className="relative z-10 px-2 py-2 inline-block">
              <LinkedInSVG />
            </span>
          </a>

          {/* github */}
          <a
            href="https://github.com/himanshumaharshi"
            className="text-zinc-500 text-sm relative"
            target="__blank"
          >
            <span className="relative z-10 px-2 py-2 inline-block">
              <GithubSVG />
            </span>
          </a>

          {/* leetcode */}
          <a
            href="https://leetcode.com/u/himanshumaharshi"
            className="text-zinc-500 text-sm relative"
            target="__blank"
          >
            <span className="relative z-10 px-2 py-2 inline-block">
              <LeetcodeSVG />
            </span>
          </a>

          {/* x */}
          <a
            href="https://x.com/__himanshu45"
            className="text-zinc-500 text-sm relative"
            target="__blank"
          >
            <span className="relative z-10 px-2 py-2 inline-block">
              <XSVG />
            </span>
          </a>

          {/* instagram */}
          <a
            href="https://www.instagram.com/__himanshu45/"
            className="text-zinc-500 text-sm relative"
            target="__blank"
          >
            <span className="relative z-10 px-2 py-2 inline-block">
              <InstagramSVG />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
