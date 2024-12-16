import React from 'react'
import Image from 'next/image'
const category = () => {
  return (
    <div className=' hidden lg:block bg-[#F6F7F9]'>
        <div className='bg-white h-[1200px] w-[360px] '>
            <div>
                <p className='ml-6 text-[#90A3BF]'>Type</p>
                <ul className='text-[#90A3BF] font-medium'>
                    
                <div className='   flex space-x-2 mt-4'>
                    <div  className='  ml-6'><Image src="/images/vector.png"alt="tick"height={20}width={20} />
                    </div><li>Sports (10)</li>
                     </div>

                     <div className=' flex space-x-2 mt-4'>
                    <div  className='  ml-6'><Image src="/images/vector.png"alt="tick"height={20}width={20} />
                    </div><li>Sports (12)</li>
                     </div>

                     <div className=' flex space-x-2 mt-4'>
                    <div  className=' border border-[#90A3BF]  rounded-md h-[20px] w-[20px] ml-6'>
                    </div><li>Sports(16)</li>
                     </div>

                     <div className=' flex space-x-2 mt-4'>
                    <div  className='   border border-[#90A3BF]  rounded-md h-[20px] w-[20px] ml-6'>
                    </div><li>Sports (20)</li>
                     </div>

                     <div className=' flex space-x-2 mt-4'>
                    <div  className='   border border-[#90A3BF]  rounded-md h-[20px] w-[20px] ml-6 '>
                    </div><li>Sports (14)</li>
                     </div>

                     <div className=' flex space-x-2 mt-4'>
                    <div  className='  border border-[#90A3BF]  rounded-md h-[20px] w-[20px] ml-6 '>
                    </div><li>Sports (14)</li>
                     </div>
                </ul>

        </div>
        <div>
                <p className='ml-6 mt-10 text-[#90A3BF]'>Type</p>
                <ul className='text-[#90A3BF] font-medium'>
                    
                <div className='   flex space-x-2 mt-4'>
                    <div  className='  ml-6'><Image src="/images/vector.png"alt="tick"height={20}width={20} />
                    </div><li>Sports (10)</li>
                     </div>

                     <div className=' flex space-x-2 mt-4'>
                    <div  className=' border border-[#90A3BF]  rounded-md h-[20px] w-[20px] ml-6'>
                    </div><li>Sports(16)</li>
                     </div>

                     <div className=' flex space-x-2 mt-4'>
                    <div  className=' border border-[#90A3BF]  rounded-md h-[20px] w-[20px] ml-6'>
                    </div><li>Sports(16)</li>
                     </div>

                     <div className=' flex space-x-2 mt-4'>
                    <div  className='  ml-6'><Image src="/images/vector.png"alt="tick"height={20}width={20} />
                    </div><li>Sports (12)</li>
                     </div>

                    

                    

                     

                    
                </ul>

                <div className="flex  mt-8 w-[350px]">
    <div className="w-80 p-4 bg-white shadow rounded-lg ml-4">
        {/* <!-- Title --> */}
        <p className="text-sm font-medium text-gray-600 mb-4">PRICE</p>

        {/* <!-- Slider Container --> */}
        <div className="relative flex items-center">
            {/* <!-- Slider Bar --> */}
            <div className
            ="w-full h-2 bg-[#3563E9] rounded-full"></div>
            
            {/* <!-- Active Slider --> */}
            <div className="absolute left-0 h-2  rounded-full"></div>
            
            {/* <!-- Slider Thumb --> */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#3563E9] w-5 h-5 rounded-full border-2 border-white shadow"></div>
        </div>

        {/* <!-- Max Price --> */}
        <p className="mt-4 text-gray-800 text-lg font-semibold">Max. $100.00</p>
    </div>

        </div>
</div>
    </div>
    </div>
  )
}

export default category