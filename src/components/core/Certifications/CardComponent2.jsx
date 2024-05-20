import React, { useState, useRef, useEffect } from "react";
import "./CardComponentStyle2.css";
import Link45deg from "../../SVG/Link45deg";

const CardComponent2 = ({ dataImage, header, content, link }) => {
  const cardRef2 = useRef(null);
  const [dimensions2, setDimensions2] = useState({ width2: 0, height2: 0 });
  const [mousePosition2, setMousePosition2] = useState({ mouseX: 0, mouseY: 0 });
  const [mouseLeaveDelay2, setMouseLeaveDelay2] = useState(null);

  useEffect(() => {
    setDimensions2({
      width2: cardRef2.current.offsetWidth2,
      height2: cardRef2.current.offsetHeight2,
    });
  }, []);

  const handleMouseMove2 = (e) => {
    const mouseX = e.pageX - cardRef2.current.offsetLeft - dimensions2.width2 / 2;
    const mouseY = e.pageY - cardRef2.current.offsetTop - dimensions2.height2 / 2;
    setMousePosition2({ mouseX, mouseY });
  };

  const handleMouseEnter2 = () => {
    if (mouseLeaveDelay2) {
      clearTimeout(mouseLeaveDelay2);
      setMouseLeaveDelay2(null);
    }
  };

  const handleMouseLeave2 = () => {
    setMouseLeaveDelay2(
      setTimeout(() => {
        setMousePosition2({ mouseX: 0, mouseY: 0 });
      }, 1000)
    );
  };

  const mousePX2 = mousePosition2.mouseX / dimensions2.width2;
  const mousePY2 = mousePosition2.mouseY / dimensions2.height2;

  const cardStyle2 = {
    transform: `rotateY(${mousePX2 * 30}deg) rotateX(${mousePY2 * -30}deg)`,
  };

  const cardBgTransform2 = {
    transform: `translateX(${mousePX2 * -40}px) translateY(${mousePY2 * -40}px)`,
  };

  const cardBgImage2 = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap m-3 cursor-pointer"
      onMouseMove={handleMouseMove2}
      onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave2}
      ref={cardRef2}
    >
      <div
        className="card relative overflow-hidden bg-[#333] rounded-xl"
        style={cardStyle2}
      >
        <div
          className="card-bg"
          style={{ ...cardBgTransform2, ...cardBgImage2 }}
        ></div>
        <div className="card-info">
          <h1>{header}{" "}<a href={link} target="_blank" rel="noreferrer"><Link45deg/></a></h1>
          <span>
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent2;
