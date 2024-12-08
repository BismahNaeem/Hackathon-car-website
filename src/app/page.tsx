import React from 'react'
import Herosection from './components/herosection'
import HeroSection2 from './components/hero2'
import Timebar from './components/timebar'
import Herocards from './components/herocards'
const page = () => {
  return (
    <div>
      <Herocards />
       <Timebar />
      <Herosection />
    
      <HeroSection2 />
    </div>
  )
}

export default page