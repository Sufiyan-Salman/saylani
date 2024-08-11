// import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const About = () => {
  const info = {
    img: "about.jpg",
    heading: "welcome to our website about",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum modi repellendus fugi",
  };

  return (
    <div>
      <Header cameFrom ="about"/>
      <h1>About</h1>
      <HeroSection information={info} />
    </div>
  );
};

export default About;
