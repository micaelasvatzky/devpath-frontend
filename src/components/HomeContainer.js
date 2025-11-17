import React, { useState} from "react";
import { useAppContext } from "@/app/contexts/AppContext"; 
import LoginPopUp from "@/components/LoginPopUp"; 
import Hero from "@/components/Hero";
import WebDescription from "@/components/WebDescription";
import Paths from "@/components/Paths";

const HomeContainer = () => {
  const { user } = useAppContext(); 

  return (
    <div>
      {!user && <LoginPopUp />}
      <Hero />
      <WebDescription />
      <Paths />
    </div>
  );
};

export default HomeContainer;
