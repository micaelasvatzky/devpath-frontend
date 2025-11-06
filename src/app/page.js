"use client"
import Image from "next/image";
import { useContext, useEffect, useEffectEvent } from "react";
import { useAppContext } from "./contexts.js/AppContext";
import HomeContainer from "@/components/HomeContainer";

export default function Home() {
  return (
 <div className="bg-amber-50">
    <HomeContainer />
  </div>
  );
}
