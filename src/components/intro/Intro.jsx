import React, { useEffect, useRef } from "react";
import "./intro.scss";
import TypeAnimation from "react-type-animation";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 100,
      loop: false,
      strings: ["Developer", "Creator", "Alchemist", "Engineer"],
    });
  }, []);

  const handleTypeAnimation = () => {
    return (
      <TypeAnimation
        cursor={true}
        sequence={[
          "Alchemist",
          2000,
          "Developer",
          2000,
          "Creator",
          2000,
          "Engineer",
        ]}
        wrapper="span"
      />
    );
  };
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Alex</h1>
          <h3>
            Professional Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
