"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";  // Para manejar el estado del menú móvil
import { useAppContext } from "@/app/contexts/AppContext";

const Navbar = () => {
  const { selectedPath, user, favoritesQty } = useAppContext();
  const pathLink = selectedPath ? `/path/${selectedPath._id}` : "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil

  // Función para alternar la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-transparent px-6 py-4 w-full fixed top-0 left-0 z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/assets/devpathlogo.png" width={200} height={1200} alt="logo" />
        </Link>

        {/* Menú de navegación para desktop */}
        <ul className="hidden md:flex md:flex-row w-auto justify-between bg-black text-white rounded-lg px-4 py-2 lg:mr-20">
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

        {/* Saludo al usuario para desktop */}
        <div className="text-white hidden md:block">
          <p>{`¡Hola, ${user && user.username ? user.username : "DevPather"}!`}</p>
        </div>

        {/* Menú hamburguesa (solo visible en móviles) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            {/* Icono del menú hamburguesa */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil (cuando isMobileMenuOpen es true) */}
      <div className={`md:hidden bg-black pt-15 text-white w-full ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
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
