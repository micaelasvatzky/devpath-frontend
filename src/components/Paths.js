import { useAppContext } from "@/app/contexts.js/AppContext"
import { useEffect } from "react"
import PathCard from "@/components/PathCard";

export const Paths = () => {
    const {getPaths, paths} = useAppContext();

    useEffect(() => {
        getPaths();
    }, [getPaths]);

   

  return (
    <div className="p-4 flex flex-col items-center text-4xl font-black  bg-gradient-to-r from-[#00aaff] via-[#a0c8ff] to-white bg-clip-text text-transparent ">
      <h1 className="mb-10">Choose your path and start coding </h1>
      <div className="flex justify-between w-full">
        {paths.map((path) => (
            <PathCard key={path._id} path = {path}/>
        ))}
        </div>
    </div>
  )
}

export default Paths