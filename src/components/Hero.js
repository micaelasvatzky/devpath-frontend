import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      className="
        relative
        h-[400px] 
        flex flex-col  items-center 
        px-6
        pt-30
        bg-[#0a0a0a]
        overflow-hidden
        text-center
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0, 120, 255, 0.7), transparent 40%),
          radial-gradient(circle at 35% 50%, rgba(0, 180, 255, 0.5), transparent 40%),
          radial-gradient(circle at 70% 70%, rgba(0, 120, 255, 0.6), transparent 50%),
          radial-gradient(circle at 85% 25%, rgba(0, 150, 255, 0.4), transparent 50%)
        `,
      }}
    >
      <h1
        className="
          font-black
          text-[3rem]
          bg-gradient-to-r from-[#00aaff] via-[#a0c8ff] to-white
          bg-clip-text text-transparent
          -webkit-bg-clip-text -webkit-text-fill-color-transparent
          leading-tight
          mb-0
        "
      >
        There are a thousand ways to learn how to code.
      </h1>
      <h1
        className="
          font-black
          text-[3rem]
          bg-gradient-to-r from-[#00aaff] via-[#a0c8ff] to-white
          bg-clip-text text-transparent
          -webkit-bg-clip-text -webkit-text-fill-color-transparent
          leading-tight
          mt-0
        "
      >
        Few show you the way.
      </h1>
      <h4 className="text-2xl font-normal mt-4 mb-0">Luckily, there’s DevPath.</h4>

      <button
        className="
          mt-6
          px-6 py-2
          rounded-lg
          border border-white/30
          bg-white/10
          text-white
          font-semibold
          backdrop-blur-md
          shadow-[0_0_20px_rgba(0,120,255,0.6)]
          transition-all duration-300
          hover:shadow-[0_0_40px_rgba(0,120,255,0.9)]
          hover:scale-105
          hover:border-white/60
        "
      >
        Start your Path
      </button>
    </div>
  );
};

export default Hero;
