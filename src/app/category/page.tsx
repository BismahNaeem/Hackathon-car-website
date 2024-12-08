import React from 'react'
import Category from '../components/category'
import Timebar from '../components/timebar'
import HeroSection from '../components/herosection'

const page = () => {
  return (
    <div>
       <div><Category /></div>
        <div className='absolute top-2 right-6 mt-10 '>
            <Timebar />
        </div>
          {/* Importing HeroSection and forcing grid-cols-3 */}
      <div className="  absolute space-x-34 top-2 pl-96 mt-52">
        <HeroSection />
        
      </div>

      </div>
    
  );
   
  
}

export default page