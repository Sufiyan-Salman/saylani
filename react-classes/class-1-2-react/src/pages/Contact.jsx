// import React from "react";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection";

const Contact = () => {
  const info = {
    img: "contact.jpg",
    heading: "welcome to our website Contact",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum modi repellendus fugi",
  };
  return (
    <div>
      <Header cameFrom ="contact"/>
      <h1>Contact</h1>
      <HeroSection information={info} />
    </div>
  );
};

export default Contact;
