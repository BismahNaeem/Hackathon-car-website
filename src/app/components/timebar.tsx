import React from 'react';
import Image from 'next/image';

const timebar = () => {
  return (
    <div className="flex justify-center bg-[#F6F7F9] p-4">
      <div className="flex items-center justify-between mt-8 w-full max-w-4xl flex-col sm:flex-row gap-4">
        {/* Left div */}
        <div className="bg-white w-full sm:w-[450px] rounded-md shadow-lg p-4">
          <div className="flex items-center gap-x-1">
            <Image src="/images/mark.png" alt="" height={6} width={20} />
            <h1 className="text-sm">Pick-Up</h1>
          </div>
          <div className="flex items-center gap-x-2 mt-6 flex-wrap">
            {/* Location */}
            <div className="flex flex-col justify-between w-auto">
              <ul>
                <li className="text-sm">Location</li>
                <div className="flex items-center gap-x-2">
                  <li className="text-xs">Select your city</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={20} />
                </div>
              </ul>
            </div>

            {/* Vertical Border */}
            <div className="border-l-2 border-gray-300 h-[48px]"></div>

            {/* Date */}
            <div className="flex flex-col justify-between w-auto">
              <ul>
                <li className="text-sm">Date</li>
                <div className="flex items-center gap-x-2">
                  <li className="text-xs">Select your date</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={18} />
                </div>
              </ul>
            </div>

            {/* Vertical Border */}
            <div className="border-l-2 border-gray-300 h-[48px]"></div>

            {/* Time */}
            <div className="flex flex-col justify-between w-auto">
              <ul>
                <li className="text-sm">Time</li>
                <div className="flex items-center gap-x-2">
                  <li className="text-xs">Select your time</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={18} />
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Right div */}
        <div className="bg-white w-full sm:w-[450px] rounded-md shadow-lg p-4">
          <div className="flex items-center gap-x-1">
            <Image src="/images/mark.png" alt="" height={6} width={20} />
            <h1 className="text-sm">Drop-Off</h1>
          </div>
          <div className="flex items-center gap-x-2 mt-6 flex-wrap">
            {/* Location */}
            <div className="flex flex-col justify-between w-auto">
              <ul>
                <li className="text-sm">Location</li>
                <div className="flex items-center gap-x-2">
                  <li className="text-xs">Select your city</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={20} />
                </div>
              </ul>
            </div>

            {/* Vertical Border */}
            <div className="border-l-2 border-gray-300 h-[48px]"></div>

            {/* Date */}
            <div className="flex flex-col justify-between w-auto">
              <ul>
                <li className="text-sm">Date</li>
                <div className="flex items-center gap-x-2">
                  <li className="text-xs">Select your date</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={18} />
                </div>
              </ul>
            </div>

            {/* Vertical Border */}
            <div className="border-l-2 border-gray-300 h-[48px]"></div>

            {/* Time */}
            <div className="flex flex-col justify-between w-auto">
              <ul>
                <li className="text-sm">Time</li>
                <div className="flex items-center gap-x-2">
                  <li className="text-xs">Select your time</li>
                  <Image src="/images/arrow.png" alt="" height={6} width={18} />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default timebar;