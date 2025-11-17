import React from "react";

const WebDescription = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-6 font-black bg-linear-to-r from-[#000814] via-[#001122] to-[#000000] text-white leading-tight min-h-[250px] overflow-hidden"
    >
      <div
        className="absolute inset-0 flex justify-center items-center 
        text-[12rem] font-bold text-[#0055ff] opacity-10 select-none pointer-events-none"
      >
        DevPath
      </div>

      <div className="flex flex-col items-center bg-linear-to-r from-[#00aaff] via-[#a0c8ff] to-white bg-clip-text text-transparent">
        <p className="text-center max-w-[1000px] pt-4 text-2xl">
          Learning to code doesn’t have to be confusing. Choose your path
        </p>
        <p className="text-center text-3xl font-bold">Frontend, Backend, or Fullstack</p>
        <p className="text-center max-w-[1000px] pb-4 text-2xl">
          and let DevPath guide you with curated, free resources from beginner
          to pro.
        </p>
      </div>
    </div>
  );
};

export default WebDescription;

