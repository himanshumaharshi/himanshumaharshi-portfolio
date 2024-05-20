import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import "./Project.css";

const CreateProjectCard = ({ title, description, techStack, image, link }) => {
  const cardBgImage = {
    backgroundImage: `url(${image})`,
  };
  return (
    <>
      <div className=" card-container flex overflow-hidden relative rounded-xl">
        <div className="card-bg blur-sm -z-20" style={{ ...cardBgImage }}></div>
        <div className="card border w-full rounded-xl border-white">
          <div className="front-content w-full h-full flex items-center justify-center">
            <p className="mainHeading opacity-100 text-4xl font-bold">
              {title}
            </p>
          </div>

          <div class="content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center gap-3 text-[#e8e8e8] rounded-md p-5">
            <p class="lg:text-4xl sm:text-sm md:text-2xl text-xs font-bold">
              {title}{" "}
              <a href={link} target="_blank">
                <BsLink45Deg className="inline" />
              </a>
            </p>
            <p className="lg:text-sm sm:text-xs text-[10px]">{description}</p>
            <p className="lg:text-sm sm:text-xs text-[10px]">
              Tech Stack: {techStack}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProjectCard;
