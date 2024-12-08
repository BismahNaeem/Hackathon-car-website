import React from 'react'

const footer = () => {
  return (
    <div>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row justify-between bg-[#FFFFFF] mb-2 mt-20'>
        <div className='ml-12'>
          <h1 className='text-[#3563E9] text-2xl font-bold'>MORENT</h1>
          <p className='w-[292px] mt-4 leading-[1.5] text-sm text-[#90A3BF]'>
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        
        <div className='flex flex-col md:flex-row gap-y-6 md:gap-x-28 mr-24 w-full md:w-auto items-center md:items-start'>
          {/* About and Community Section - Horizontally aligned on mobile */}
          <div className='flex flex-col md:flex-row gap-x-6 mb-6 md:mb-0 w-full md:w-auto justify-center items-center'>
            {/* About Section */}
            <ul className='text-center md:text-left'>
              <h1 className='text-lg font-bold'>About</h1>
              <li className='text-[#90A3BF] mt-6 text-lg'>How it works</li>
              <li className='text-[#90A3BF] mt-6 text-lg'>Featured</li>
              <li className='text-[#90A3BF] mt-6 text-lg'>Partnership</li>
              <li className='text-[#90A3BF] mt-6 mb-6 text-lg'>Business relation</li>
            </ul>

            {/* Community Section */}
            <ul className='text-center md:text-left'>
              <h1 className='text-lg font-bold'>Community</h1>
              <li className='text-[#90A3BF] mt-6 text-lg'>Events</li>
              <li className='text-[#90A3BF] mt-6 text-lg'>Blog</li>
              <li className='text-[#90A3BF] mt-6 text-lg'>Podcast</li>
              <li className='text-[#90A3BF] mt-6 text-lg'>Invite a friend</li>
            </ul>
          </div>

          {/* Socials Section - Below About and Community */}
          <ul className='text-center md:text-left'>
            <h1 className='text-lg font-bold'>Socials</h1>
            <li className='text-[#90A3BF] mt-6 text-lg'>Discord</li>
            <li className='text-[#90A3BF] mt-6 text-lg'>Instagram</li>
            <li className='text-[#90A3BF] mt-6 text-lg'>Twitter</li>
            <li className='text-[#90A3BF] mt-6 text-lg'>Facebook</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row justify-between mb-16 border-t-2 border-[#90A3BF]'>
        <h1 className='ml-6 mt-6 font-bold'>©2022 MORENT. All rights reserved</h1>
        <div className='mt-6 font-bold flex flex-col md:flex-row gap-y-2 md:gap-x-10 mr-20'>
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
}

export default footer;