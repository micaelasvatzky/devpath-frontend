import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect } from "react";
import PathCard from "@/components/PathCard";

export const Paths = () => {
  const { getPaths, paths } = useAppContext();

  useEffect(() => {
    getPaths();
  }, [getPaths]);

  return (
    <div id="paths" className="p-4 flex flex-col items-center text-4xl font-black bg-linear-to-r from-[#00aaff] via-[#a0c8ff] to-white bg-clip-text text-transparent">
      <h1 className="mb-10 text-center">Choose your path and start coding</h1>
      <div className="flex flex-wrap justify-center gap-4 w-full sm:flex-row sm:gap-6 lg:gap-8">
        {paths.map((path) => (
          <PathCard key={path._id} path={path} />
        ))}
      </div>
    </div>
  );
};

export default Paths;


