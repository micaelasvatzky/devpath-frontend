import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'> 
        <Link href="/" className='flex items-center'>
        <Image src="/vercel.svg" width={50} height={50} alt={"hola"}/>
        </Link>

        <ul className=' md:flex md:flex-row md:w-[30%]  md:justify-between md:mr-4 md:pr-2
          absolute md:static top-[70px] left-0 w-full md:bg-transparent text-white text-md'>
             <li className="px-4 py-2 md:p-0">
          <Link href={`/path`}>Selected Path</Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/about-me">About Me</Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/favorites">Favorites</Link>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar