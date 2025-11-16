import { useState } from "react";

const SinglePathCard = ({ step }) => {
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const toggleCompletion = () => setCompleted(!completed);

  const completeCheck = completed ? (
    <svg
      class="w-8 h-8 text-green-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
        clip-rule="evenodd"
      />
    </svg>
  ) : (
    <svg
      class="w-8 h-8 text-white"
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

  const getResourceIconAndColor = (type) => {
    switch (type.toLowerCase()) {
      case "video":
        return {
          icon: (
            <svg
              class="w-6 h-6 text-blue-500 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                clip-rule="evenodd"
              />
            </svg>
          ),
        };
      case "artículo":
        return {
          icon: (
            <svg
              class="w-6 h-6 text-pink-500 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 5c.47 0 .917-.092 1.326-.26l1.967 1.967a1 1 0 0 0 1.414-1.414l-1.817-1.818A3.5 3.5 0 1 0 11.5 17Z"
                clip-rule="evenodd"
              />
            </svg>
          ),
        };
      case "curso":
        return {
          icon: (
            <svg
              class="w-6 h-6 text-green-500 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                clip-rule="evenodd"
              />
            </svg>
          ),
        };
      case "guía":
        return {
          icon: (
            <svg
              class="w-6 h-6 text-purple-500 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z"
                clip-rule="evenodd"
              />
            </svg>
          ),
        };
    }

    return null;
  };

  return (
    <div className="relative  overflow-hidden rounded-2xl p-3 bg-[#0d0f16]/80 border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,255,0.2)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_60px_-10px_rgba(0,120,255,0.5)] hover:border-blue-500/30">
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent opacity-40" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="flex justify-between items-center">
        <div className=" w-full flex justify-between">
        <h3 className="text-xl font-semibold text-white">
          {step.order}. {step.title}
        </h3>
        <button className='z-20' onClick={toggleCompletion}>{completeCheck}</button>
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
          <div className="flex items-center">
            <p className="font-semibold text-md">Resources:</p>
            <ul className="space-y-1 flex">
              {step.resources.map((resource) => {
                const { icon, color } = getResourceIconAndColor(resource.type);
                return (
                  <a
                    href={`${resource.url}`}
                    target="_blank"
                    key={resource._id}
                    className={`text-white/80 text-sm p-3 rounded-lg ${color} cursor-pointer z-20`}
                  >
                    {icon}
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePathCard;
