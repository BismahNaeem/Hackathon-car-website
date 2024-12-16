import React from 'react';
import Category from '../components/category';
import Timebar from '../components/timebar';
import HeroSection from '../components/herosection';

const Page = () => {
  return (
<>
  <div>
    <div className='flex justify-between'>
   <div className='mt-2'> <Category /></div> 
    <div  className='mt-2'><Timebar />
    <div className=''> <HeroSection rows={3} /></div>
    </div>
    </div>
    
  </div>
 


    </>
  );
};

export default Page;