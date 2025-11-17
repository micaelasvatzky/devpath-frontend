"use client";
import React, { useState } from "react";
import { useAppContext } from "@/app/contexts/AppContext";
import ResourceCard from "@/components/ResourceCard";

const SingleStepCard = ({ step }) => {
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { handleChangeFavorite, isFavorite } = useAppContext();

  const toggleDropdown = () => setOpen(!open);
  const toggleCompletion = () => setCompleted(!completed);

  const completeCheck = completed ? (
    <svg
      className="w-8 h-8 text-green-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      className="w-8 h-8 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );

  return (
    <div className="relative overflow-hidden rounded-2xl p-3 bg-[#0d0f16]/80 border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,255,0.2)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_60px_-10px_rgba(0,120,255,0.5)] hover:border-blue-500/30">
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent opacity-40" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="flex justify-between items-center">
        <div className=" w-full h-[50px] flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            {step.order}.  {step.title}
          </h3>
          <button className="z-20" onClick={toggleCompletion}>
            {completeCheck}
          </button>
        </div>

        <button
          onClick={toggleDropdown}
          className="text-white p-2 hover:text-blue-400 cursor-pointer z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mt-2 space-y-2">
          <p className="text-lg text-white/70 mb-6 font-medium">
            {step.description}
          </p>
          <div>
            <p className="font-semibold text-md mb-4">Resources:</p>
            <ul className="space-y-1">
              {step.resources.map((resource) => (
                <ResourceCard key={resource.title} resource={resource} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleStepCard;
