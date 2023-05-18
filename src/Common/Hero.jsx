import React from "react";

const Hero = ({ title, subTitle, text }) => {
  return (
    <div className="bg-pages-hero-bg bg-no-repeat bg-cover bg-center w-full h-[350px] lg:h-[400px]">
      <div className="w-4/5 mx-auto">
        <h1 className="pt-28 lg:pt-44 text-center text-3xl lg:text-5xl font-semibold text-light leading-[150%]">
          {title} {" "}
          <span className="text-green">{subTitle}</span>
        </h1>
        <p className=" text-center  text-base text-white max-w-2xl mx-auto mt-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Hero;
