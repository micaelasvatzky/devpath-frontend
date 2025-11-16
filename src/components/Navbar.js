"use client";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/app/contexts.js/AppContext";

const Navbar = () => {
  const { selectedPath, user } = useAppContext();
  const pathLink = selectedPath ? `/path/${selectedPath._id}` : "/";


  return (
    <nav className="flex justify-between items-center bg-transparent mx-10 mb-10 h-[100px] w-[95%] fixed top-0 left-0 z-50">
      <Link href="/" className="flex items-center">
        <Image src="/vercel.svg" width={50} height={50} alt={"logo"} />
      </Link>
      <ul className="md:flex md:flex-row w-[50%] justify-between mr-4 px-4 py-1 bg-black text-white rounded-lg">
        <li className="px-4 py-2 md:p-0">
          <Link href={pathLink}>
            {selectedPath ? selectedPath.name : "Selected Path"}
          </Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/about-me">About Me</Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>

      <div>
       <p>{`¡Hola, ${user && user.username ? user.username : "DevPather"}!`}</p>

      </div>
    </nav>
  );
};

export default Navbar;
