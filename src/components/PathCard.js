const PathCard = ({ path }) => {
  const colorMap = {
    Frontend: {
      gradient:
        "from-[#003CFF]/15 via-[#15E8FF]/15 to-[#5A4BFF]/15", 
      border: "shadow-[0_0_20px_#15E8FF]",
      glow: "shadow-[0_0_25px_#15E8FF]",
    },
    Backend: {
      gradient:
        "from-[#5A4BFF]/15 via-[#C158FF]/15 to-[#EE6DC1]/15",
      border: "shadow-[0_0_20px_#C158FF]",
      glow: "shadow-[0_0_25px_#C158FF]",
    },
    Fullstack: {
      gradient:
        "from-[#C158FF]/15 via-[#EE6DC1]/15 to-[#5A4BFF]/15",
      border: "shadow-[0_0_20px_#EE6DC1]",
      glow: "shadow-[0_0_25px_#EE6DC1]",
    },
  };

  const c = colorMap[path.name];

  return (
    <div
      className={`
        relative
        w-full
        max-w-sm
        p-6
        rounded-2xl
        bg-linear-to-br ${c.gradient}
        backdrop-blur-sm
        text-white
        border border-white/5
        ${c.border}
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:${c.glow}
        overflow-hidden
      `}
    >
      <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none" />

      <h3 className="relative text-xl font-semibold mb-2 z-10">
        {path.name}
      </h3>
      <p className="relative text-sm mb-4 text-white/85 z-10">
        {path.description}
      </p>

      <ul className="relative space-y-2 text-sm z-10">
        {path.steps.map((step) => (
          <li key={step.title} className="flex items-center gap-2 text-white/75">
            <span
              className={`w-1.5 h-1.5 rounded-full bg-white/70 ${c.glow}`}
            />
            {step.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PathCard;
