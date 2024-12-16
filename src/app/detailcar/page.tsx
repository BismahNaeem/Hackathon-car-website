import React from 'react'
import Category from '../components/category'
import Detailcar from '../components/detailcar'


const page = () => {
  return (
    <div className='bg-gray-200'>
            <div className='flex justify-between gap-8 '>
   <div className=''> <Category /></div> 
    <div  className='mt-4'><Detailcar />
   </div>
    </div>
 
</div>
             
            
  )
}

export default page