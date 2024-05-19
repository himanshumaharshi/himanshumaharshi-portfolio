import React, { useState } from "react";
import RenderEducationList from "./RenderEducationList";
import RenderEducationData from "./RenderEducationData";

const EducationDetails = () => {
  const educations = [
    {
      id: 1,
      course: "BTech CSE",
      handle: "Arya Instuture of Engg. Tech. & Mgmt.",
      institute: "@ Arya Instuture of Engineering Technology & Management",
      duration: "July 2020 - June 2024",
      location: "Jaipur, Rajasthan, India",
    },
    {
      id: 2,
      course: "Class 12th",
      handle: "S S International Sr. Sec. School",
      institute: "@ S S International Sr. Sec. School",
      duration: "April 2019 - March 2020",
      location: "Jaipur, Rajasthan, India",
    },
    {
      id: 3,
      course: "Class 10th",
      handle: "Maharshi Dayanand Public School",
      institute: "@ Maharshi Dayanand Public School",
      duration: "April 2016 - March 2017",
      location: "Jaipur, Rajasthan, India",
    },
  ];

  const [selectedId, setSelectedId] = useState(educations[0].id);

  const handleInstituteClick = (id) => {
    setSelectedId(id);
  };

  const selectedEducation = educations.find(
    (education) => education.id === selectedId
  );

  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div style={{ flex: 1, padding: "10px" }}>
        <span>
          <RenderEducationList
            educations={educations}
            onInstituteClick={handleInstituteClick}
            selectedId={selectedId}
          />
        </span>
      </div>

      {/* render education data */}
      <div style={{ flex: 2, padding: "10px" }}>
        <RenderEducationData education={selectedEducation} />
      </div>
    </div>
  );
};

export default EducationDetails;
