'use client'
import {useState} from 'react'
import Hero from '@/components/Hero'
import Paths from '@/components/Paths'
import Navbar from '@/components/Navbar'
import LoginPopUp from '@/components/LoginPopUp'
import WebDescription from '@/components/WebDescription'
import { useAppContext } from '@/app/contexts.js/AppContext'

const HomeContainer = () => {
  const [showLoginPopUp, setShowLoginPopUp] = useState(true); 

    const closeLoginPopUp = () => {
    setShowLoginPopUp(false);
  };


  return (
    <div>
      <Navbar/>
      <Hero />
      <WebDescription />
      <Paths />

      {showLoginPopUp && <LoginPopUp onClose={closeLoginPopUp} />}
    </div>
  )
}

export default HomeContainer