import React from 'react'
import Category from '../components/category'
import Detailcar from '../components/detailcar'
import HeroSection from '../components/herosection'
import Cards from '../components/cards'

const page = () => {
  return (
    <div>
        <div><Category /></div>
        <div className='absolute top-8  mt-20 pl-96'><Detailcar /></div>
   
 
</div>
             
            
  )
}

export default page