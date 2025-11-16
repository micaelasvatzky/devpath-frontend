import React from "react";

const HeroPath = ({singlePath}) => {

    if (!singlePath) {
    return <div>Loading...</div>; 
  }

  return (
    <div
      className="
        relative
        h-[350px] 
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
          text-5xl
          bg-linear-to-r from-[#00aaff] via-[#a0c8ff] to-white
          bg-clip-text text-transparent
          -webkit-bg-clip-text -webkit-text-fill-color-transparent
          leading-tight
          mb-5
        "
      >
        {singlePath.name}
      </h1>
      <p className="text-2xl flex w-[800px]">{singlePath.description}</p>
    </div>
  );
};

export default HeroPath;
