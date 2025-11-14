"use client";
import { useAppContext } from "@/app/contexts.js/AppContext";
import { useEffect } from "react";

const PathContainer = ({ id }) => {
  const { getSinglePath, singlePath } = useAppContext();

  useEffect(() => {
    getSinglePath(id);
  }, [getSinglePath, id]);

  if (!singlePath || !singlePath.steps) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-white">{singlePath.name}</h1>
      <h1 className="text-white">{singlePath.description}</h1>

      <ul>
        {singlePath.steps.map((step) => (
          <li key={step._id} className="text-white">
            <h2 className="font-bold">{step.title}</h2>
            <p>{step.description}</p>

            <ul>
              {step.resources.map((resource) => (
                <li key={resource._id} className="text-white/80">
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

export default PathContainer;
