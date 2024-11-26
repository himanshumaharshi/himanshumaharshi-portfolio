import React, { useState } from "react";
import RenderExperienceList from "./RenderExperienceList";
import RenderExperienceData from "./RenderExperienceData";
import ARYALOGO from "../../../assets/CompanyLogo/Arya-logo.avif"

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      position: "Associate Software Development Engineer",
      handle: "Swiggy",
      company: "@ Swiggy",
      duration: "August 2024 - Present",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Integrated Prometheus into an individual service, enabling faster root cause analysis and improving failure detection efficiency by 20%.",
        "Developed a gRPC-based inventory archival API in Go, ensuring compliance with business rules and reducing manual intervention in archival processes by 30%.",
        "Optimized SKU recommendation logic for Instamart, leading to a 15% improvement in operational efficiency and better business outcomes.",
        "Improved system reliability and performance by implementing TDD-driven testing, modular OOP designs, and leveraging expertise in Go, gRPC, and monitoring tools.",
      ],
      companyLogo: SWIGGYLOGO,
    },
    {
      id: 2,
      position: "Graphic Designer Intern",
      handle: "Arya Group of Colleges",
      company: "@ Arya Group of Colleges",
      duration: "June 2021 - Nov 2021",
      location: "Jaipur, Rajasthan, India",
      description: [
        "Spearheaded the development of cutting-edge graphic designs by harnessing the potential of new software platforms.",
        "Pioneered the creation of dynamic motion posters and videos, showcasing ingenuity and creativity at college level.",
        "Utilized Adobe Photoshop to produce visually captivating graphic design posters.",
        "Expertly operated Adobe Premier Pro and After Effects to craft engaging videos and motion graphics.",
      ],
      companyLogo: ARYALOGO,
    },
  ];

  const [selectedId, setSelectedId] = useState(experiences[0].id);

  const handleInstituteClick = (id) => {
    setSelectedId(id);
  };

  const selectedExperience = experiences.find(
    (experience) => experience.id === selectedId
  );
  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div style={{ flex: 1, padding: "10px" }}>
        <span>
          <RenderExperienceList
            experiences={experiences}
            onInstituteClick={handleInstituteClick}
            selectedId={selectedId}
          />
        </span>
      </div>

      {/* render experience data */}
      <div style={{ flex: 2, padding: "10px" }}>
        <RenderExperienceData experience={selectedExperience} />
      </div>
    </div>
  );
};

export default WorkExperience;
