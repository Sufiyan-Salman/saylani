import React from "react";
// import heroSecton from "../assets/hero.jpg";

const HeroSection = ({ img, heading, para }) => {
  //   const { information } = props;
  //   console.log(hello);
  return (
    <div style={{ display: "flex" }}>
      
      <div>
        <img src={img} alt={img} width={400} height={300} />
      </div>
      <div>
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default HeroSection;
