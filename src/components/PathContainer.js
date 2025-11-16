"use client";
import { useAppContext } from "@/app/contexts.js/AppContext";
import { useEffect } from "react";
import HeroPath from "@/components/HeroPath";
import SinglePathCard from "@/components/SinglePathCard";

const PathContainer = ({ id }) => {
  const { getSinglePath, singlePath } = useAppContext();

  useEffect(() => {
    getSinglePath(id);
  }, [getSinglePath, id]);


  return (
    <div>
      <HeroPath singlePath={singlePath} />
      <ul className="grid grid-cols-2 gap-4 justify-between my-10">
        {singlePath.steps.map((step) => (
          <li key={step._id}>
            <SinglePathCard step={step} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PathContainer;

