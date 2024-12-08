import React from 'react'
import Image from 'next/image'

const timebar = () => {
  return (
    <div className='flex justify-center bg- bg-[#F6F7F9]'>
      <div className='flex items-center justify-between mt-8 space-x-8 w-full max-w-4xl flex-col sm:flex-row'>
        {/* Left div */}
        <div className='bg-white h-[132px] w-full sm:w-[450px] rounded-md shadow-lg p-4 mb-4 sm:mb-0'>
          <div className='flex gap-x-1'>
            <Image src="/images/mark.png" alt="" height={6} width={20} />
            <h1 className='text-sm'>Pick-Up</h1>
          </div>
          <div className='flex gap-x-1 mt-6'>
            {/* Location */}
            <div className='flex flex-col justify-between'>
              <ul>
                <li className='text-sm'>Location</li>
                <div className='flex gap-x-0'>
                  <li className='text-xs w-28'>Select your city</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={20} />
                </div>
              </ul>
            </div>

            {/* Vertical Border between Location and Date */}
            <div className='border-l-2 border-gray-300 h-[48px] mx-2'></div>

            {/* Date */}
            <div className='flex flex-col justify-between'>
              <ul>
                <li className='text-sm'>Date</li>
                <div className='flex gap-x-2'>
                  <li className='text-xs w-28'>Select your date</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={18} />
                </div>
              </ul>
            </div>

            {/* Vertical Border between Date and Time */}
            <div className='border-l-2 border-gray-300 h-[48px] mx-2'></div>

            {/* Time */}
            <div className='flex flex-col justify-between'>
              <ul>
                <li className='text-sm'>Time</li>
                <div className='flex gap-x-2'>
                  <li className='text-xs w-28'>Select your time</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={18} />
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Right div */}
        <div className='bg-white h-[132px] w-full sm:w-[450px] rounded-md shadow-lg p-4'>
          <div className='flex gap-x-1'>
            <Image src="/images/mark.png" alt="" height={6} width={20} />
            <h1 className='text-sm'>Drop-Off</h1>
          </div>
          <div className='flex gap-x-1 mt-6'>
            {/* Location */}
            <div className='flex flex-col justify-between'>
              <ul>
                <li className='text-sm'>Location</li>
                <div className='flex gap-x-2'>
                  <li className='text-xs w-28'>Select your city</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={20} />
                </div>
              </ul>
            </div>

            {/* Vertical Border between Location and Date */}
            <div className='border-l-2 border-gray-300 h-[48px] mx-2'></div>

            {/* Date */}
            <div className='flex flex-col justify-between'>
              <ul>
                <li className='text-sm'>Date</li>
                <div className='flex gap-x-2'>
                  <li className='text-xs w-28'>Select your date</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={18} />
                </div>
              </ul>
            </div>

            {/* Vertical Border between Date and Time */}
            <div className='border-l-2 border-gray-300 h-[48px] mx-2'></div>

            {/* Time */}
            <div className='flex flex-col justify-between'>
              <ul>
                <li className='text-sm'>Time</li>
                <div className='flex gap-x-2'>
                  <li className='text-xs w-28'>Select your time</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={18} />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default timebar