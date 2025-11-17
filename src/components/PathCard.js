import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext";

const PathCard = ({ path }) => {
  const { updateSelectedPath } = useAppContext();

  const handleClick = () => {
    updateSelectedPath(path);

  };


  return (
    <Link href={`/path/${path._id}`}>
      <div
        className="
        relative overflow-hidden rounded-2xl p-6
        bg-[#0d0f16]/80
        border border-white/10
        shadow-[0_0_40px_-10px_rgba(0,0,255,0.2)]
        backdrop-blur-md
        transition-all duration-300
        hover:shadow-[0_0_60px_-10px_rgba(0,120,255,0.5)]
        hover:border-blue-500/30 cursor-pointer
        w-[375px] lg:w-[450px] h-[500px]
      "
      onClick={handleClick}
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent opacity-40" />

        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />

        <h3 className="relative text-xl font-semibold mb-3 text-white">
          {path.name}
        </h3>

        <p className="relative text-sm mb-5 font-medium text-white/70 h-[60px]">
          {path.description}
        </p>

        <ul className="relative space-y-3 cursor-default">
          {path.steps.map((step) => (
            <li
              key={step._id}
              className="
              flex flex-col gap-1
              p-3 rounded-lg
              bg-white/5 border border-white/5
             text-sm
            "
            >
              <span className="font-medium text-white">{step.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default PathCard;
