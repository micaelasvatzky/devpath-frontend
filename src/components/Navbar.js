"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";  
import { useAppContext } from "@/app/contexts/AppContext";

const Navbar = () => {
  const { selectedPath, user, favoritesQty } = useAppContext();
  const pathLink = selectedPath ? `/path/${selectedPath._id}` : "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false); 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-transparent px-6 py-4 w-full fixed top-0 left-0 z-50 lg:h-[100px]">
        <Link href="/" className="flex items-center">
          <Image src="/iconDev.png" width={200} height={1200} alt="logo" />
        </Link>

        <ul className="hidden md:flex md:flex-row w-auto justify-between bg-black text-white rounded-lg px-4 py-2 lg:mr-20">
          <li className="px-4 py-2">
            <Link href={pathLink}>
              {selectedPath ? selectedPath.name : "Select Path"}
            </Link>
          </li>
          {/*<li className="px-4 py-2">
            <Link href="/about-me">About Me</Link>
          </li>*/}
          <li className="px-4 py-2 flex gap-2">
            <Link href="/favorites">Favorites</Link>
            <span className="bg-blue-800 text-white text-sm px-2 py-0.5 font-black rounded-full">
              {favoritesQty()}
            </span>
          </li>
        </ul>

        <div className="text-white hidden md:block">
          <p>{`¡Hola, ${user && user.username ? user.username : "DevPather"}!`}</p>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className={`md:hidden bg-black pt-15 text-white w-full ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center py-4">
          <li className="px-4 py-2">
            <Link href={pathLink}>
              {selectedPath ? selectedPath.name : "Select Path"}
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link href="/about-me">About Me</Link>
          </li>
          <li className="px-4 py-2 flex gap-2">
            <Link href="/favorites">Favorites</Link>
            <span className="bg-blue-800 text-white text-sm px-2 py-0.5 font-black rounded-full">
              {favoritesQty()}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
