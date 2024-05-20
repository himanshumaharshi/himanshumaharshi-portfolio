import React from "react";
// import ProjectCardGenerator from "./ProjectCardGenerator";
import STUDYNOTION from "../../../assets/Projects/study-notion.png";
import REALESTATE from "../../../assets/Projects/real-estate.png";
import WEATHER from "../../../assets/Projects/weather-app.png";
import PASSWORD from "../../../assets/Projects/pass-gen.png";
import TICTACTOE from "../../../assets/Projects/tic-tac-toe.png";
import CreateProjectCard from "./CreateProjectCard";

const ProjectCard = () => {
  const projects = [
    {
      title: "Ed Tech Platform",
      description:
        "Study-Notion is a full-stack web-based EdTech application with features for posting, deleting, and updating videos. The backend is developed using Node.js, Express.js, Mongoose, and Node Modules. It includes user authentication and authorization to secure sensitive data, showcasing full-stack proficiency and best practices for a dynamic and robust website.",
      techStack:
        "Node.js, React.js, Express.js, Redux, TailwindCSS, MongoDB, React Router",
      image: STUDYNOTION,
      link: "https://github.com/himanshumaharshi/study-notion",
    },
    {
      title: "Weather App",
      description:
        "Weather app built with HTML, CSS, and JavaScript uses the OpenWeather API to provide real-time weather data, including temperature, wind speed, humidity, and cloud cover. It features a user-friendly design, responsive layout, and cross-device compatibility.",
      techStack: "HTML, CSS, JS, TailwindCSS",
      image: WEATHER,
      link: "https://himanshumaharshi.github.io/Weather-App/",
    },
    {
      title: "Real Estate",
      description:
        "Real Estate provides a platform to rent or sell properties, and find the best possible prices for the property. Users can also negotiate the price if required.",
      techStack:
        "Node.js, React.js, Express.js, Redux, TailwindCSS, MongoDB, React Router",
      image: REALESTATE,
      link: "https://mern-estate-qtff.onrender.com/",
    },
    {
      title: "Password Generator",
      description:
        "Random Password Generator built with HTML, CSS, and JavaScript. It features a user-friendly interface with customizable options for password strength, including length, uppercase letters, numbers, and symbols. The generator offers real-time password previews and an easy copy-to-clipboard function.",
      techStack: "HTML5, CSS3, Javascript",
      image: PASSWORD,
      link: "https://himanshumaharshi.github.io/passwordGenerator/",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A Tic-Tac-Toe app created with HTML, CSS, and JavaScript. It features a user-friendly interface and responsive design for seamless gameplay. The app supports two-player mode, tracks the game state, and announces the winner or a draw.",
      techStack: "HTML5, CSS3, JS",
      image: TICTACTOE,
      link: "https://himanshumaharshi.github.io/TicTacToe/",
    },
  ];
  return (
    <div className="flex items-center justify-center md:py-10 px-10">
      <div className="grid lg:grid-cols-2 gap-10 z-10 sm:grid-cols-1 md:grid-cols-1">
        {projects.map((project, index) => (
          <CreateProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
