import React from "react";

const HeroPath = ({ singlePath}) => {

  return (
    <div
      className="relative h-[400px] md:h-[350px] lg:h-[350px] flex flex-col items-center px-6 sm:px-4 md:px-6 pt-30 sm:pt-20 md:pt-30 bg-[#0a0a0a] overflow-hidden text-center"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0, 120, 255, 0.7), transparent 40%),
          radial-gradient(circle at 35% 50%, rgba(0, 180, 255, 0.5), transparent 40%),
          radial-gradient(circle at 70% 70%, rgba(0, 120, 255, 0.6), transparent 50%),
          radial-gradient(circle at 85% 25%, rgba(0, 150, 255, 0.4), transparent 50%)`
      }}
    >
      <h1
        className="font-black text-4xl sm:text-5xl md:text-6xl bg-linear-to-r from-[#00aaff] via-[#a0c8ff] to-white bg-clip-text text-transparent leading-tight mb-5"
      >
        {singlePath.name}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl flex w-full max-w-4xl px-4 sm:px-6">
        {singlePath.description}
      </p>
    </div>
  );
};

export default HeroPath;
