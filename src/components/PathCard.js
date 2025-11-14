const PathCard = ({ path }) => {
  return (
    <div className="relative p-4">
      <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none" />

      <h3 className="relative text-xl font-semibold mb-2 z-10">{path.name}</h3>
      <p className="relative text-sm mb-4 text-white/85 z-10">{path.description}</p>

      <ul className="relative space-y-2 text-sm z-10">
        {path.steps.map((step) => (
          <li key={step._id} className="flex flex-col gap-2 text-white/75">
            {/* Step title */}
            <div className="font-medium text-white/90">{step.title}</div>

            {/* Resources */}
            <ul className="ml-4 mt-1 space-y-1">
              {step.resources.map((resource) => (
                <li
                  key={`${resource._id}`} // key única combinando step y resource
                  className="flex items-center gap-2 text-white/75"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  {resource.title}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PathCard;
