import React from "react";
import CardComponent2 from "./CardComponent2";
import "./CardComponentStyle2.css";
import DSA from "../../../assets/Certificates/DSA_certi.png";
import MERN from "../../../assets/Certificates/MERN_Certi.png";
import ICC from "../../../assets/Certificates/ICC-IIT-Roorkee.png";
import RPJWT from "../../../assets/Certificates/RACSCT-2024_AnalysisOfJWT.jpg";
import RPEH from "../../../assets/Certificates/RACSCT-2024_EthicalHacking.jpg";
import PS from "../../../assets/Certificates/Udemy_Photoshop_Certificate.png";
import AE from "../../../assets/Certificates/Udemy_After-Effects_Certificate.png";
import INTERN from "../../../assets/Certificates/Graphic-Designing-Internship.png";

const CardGenerator2 = () => {
  const cards2 = [
    {
      header: "Data Structures & Algorithms",
      content: "Mastered the DSA and Programming concepts.",
      link: "https://learn.codehelp.in/share-certificate?serialno=A2TTZKGR",
      dataImage: DSA,
    },
    {
      header: "MERN Stack Development",
      content: "Learned the Full Stack Development",
      link: "https://learn.codehelp.in/share-certificate?serialno=6QNOO42A",
      dataImage: MERN,
    },
    {
      header: "Analysis of JSON Web Tokens",
      content: "Presented Research Paper",
      link: "https://drive.google.com/file/d/10hS0jnWvUkGBiTgxhBmjEz0sNNa6AMNB/view?usp=drive_link",
      dataImage: RPJWT,
    },
    {
      header: "Photoshop",
      content: "Learned complete photoshop for graphic designing.",
      link: "https://drive.google.com/file/d/1RBX6H4bLWAdHrgOCkfaqXkU9yvHYQIUi/view?usp=drive_link",
      dataImage: PS,
    },
    {
      header: "International Coding Challenge",
      content:
        "Participated in International Coding Challenge organized at IIT Roorkee",
      link: "https://hyperstack.id/credential/1b84eb93-632a-4b94-9a56-155e14ed6571",
      dataImage: ICC,
    },
    {
      header: "Graphic Desiner Intern",
      content: "Interned at Arya Group of Colleges",
      link: "https://drive.google.com/file/d/1g4QxDANio5WoUfe-Lkp5-gFrmpWWVk7L/view?usp=drive_link",
      dataImage: INTERN,
    },
    {
      header: "Ethical Hacking",
      content: "Presented Research Paper titled ",
      link: "https://drive.google.com/file/d/10JgdLTyBrhqZpqKvXzER5hdUxRvkOIsA/view?usp=drive_link",
      dataImage: RPEH,
    },
    {
      header: "After Effects",
      content: "Mastered After Effects Software for video editing.",
      link: "https://drive.google.com/file/d/14XPS0Md_7CfW-rzrSTTYZZqj0-6CEvLa/view?usp=drive_link",
      dataImage: AE,
    },
  ];

  return (
    <div className="flex items-center justify-center md:py-10 px-20">
      <div className="w-max-7xl grid grid-rows-4 lg:grid-flow-col">
        {cards2.map((card, index) => (
          <CardComponent2 key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGenerator2;
