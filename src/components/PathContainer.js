"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect } from "react";
import HeroPath from "@/components/HeroPath";
import SingleStepCard from "@/components/SingleStepCard";

const PathContainer = ({ id }) => {
  const { getSinglePath, singlePath } = useAppContext();

  useEffect(() => {
    getSinglePath(id);
  }, [getSinglePath, id]);

  return (
    <div>
      <HeroPath singlePath={singlePath} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-between my-10 mx-4 sm:mx-10">
        {singlePath.steps.map((step) => (
          <li key={step._id}>
            <SingleStepCard step={step} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PathContainer;
