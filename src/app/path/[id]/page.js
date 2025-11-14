import Navbar from "@/components/Navbar";
import PathContainer from "@/components/PathContainer";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <PathContainer id={id} />
    </div>
  );
};

export default page;
