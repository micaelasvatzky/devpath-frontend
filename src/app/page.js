"use client"
import Image from "next/image";
import { useContext, useEffect, useEffectEvent } from "react";
import { useAppContext } from "./contexts.js/AppContext";

export default function Home() {
  const {getPaths, paths} = useAppContext();

  useEffect(() => {
    getPaths();
  
  }, [getPaths])
  

  return (
   <div className="text-white">
  {paths.map((path) => (
    <p key={path._id}>{path.name}</p>
  ))}
</div>
  );
}
