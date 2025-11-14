import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Paths from '@/components/Paths'
import WebDescription from '@/components/WebDescription'

const HomeContainer = () => {
  return (
    <div>
        <Hero />
        <WebDescription />
        <Paths />
    </div>
  )
}

export default HomeContainer