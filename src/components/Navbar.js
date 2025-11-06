import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between'> 
        <Link href="/" className='flex items-center'>
        <Image src="/next.svg" width={150} height={150} alt={"hola"}/>
        </Link>

        <ul className=' md:flex md:flex-row md:w-[40%] md:justify-between md:font-bold md:mr-4 md:pr-2
          absolute md:static top-[70px] left-0 w-full bg-white md:bg-transparent text-black '>
             <li className="px-4 py-2 md:p-0">
          <Link href={`/path`}>Selected Path</Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/about-me">About Me</Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/favorites">Favorite</Link>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar