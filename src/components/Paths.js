import { useAppContext } from "@/app/contexts.js/AppContext"
import { useEffect } from "react"
import PathCard from "@/components/PathCard";

export const Paths = () => {
    const {getPaths, paths} = useAppContext();

    useEffect(() => {
        getPaths();
    }, [getPaths]);


  return (
    <div className="flex justify-between">
        {paths.map((path) => (
            <PathCard key={path._id} path = {path}/>
        ))}
    </div>
  )
}

export default Paths