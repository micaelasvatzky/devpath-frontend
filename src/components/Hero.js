import React from "react";

const Hero = () => {
  return (
    <div className="h-[300px] flex items-baseline justify-center align-left ml-6 flex-col">
      <h1 className="flex justify-start items-center font-black text-3xl">
        There are a thousand ways to learn how to code.
      </h1>
      <h1 className="flex justify-start items-center font-black text-3xl ">
        Few show you the way.
      </h1>
      <h4 className="text-2xl mt-4">Luckily, there’s DevPath.</h4>
      <button
        className="
  relative
  px-8 py-3 mt-6
  rounded-2xl 
  uppercase 
  font-semibold 
  tracking-wide
  text-white 
  backdrop-blur-md
  bg-linear-to-r from-[#c158ff]/40 to-[#EE6DC1]/60
  border border-white/20
  shadow-[0_0_40px_-10px_rgba(0,229,255,0.6)]
  transition-all
  hover:shadow-[0_0_60px_-5px_rgba(123,44,255,0.9)]
  hover:scale-[1.05]
  hover:border-white/40
"
      >
       Start your Path
      </button>
    </div>
  );
};

export default Hero;
