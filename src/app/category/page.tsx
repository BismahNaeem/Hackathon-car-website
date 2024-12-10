import React from 'react';
import Category from '../components/category';
import Timebar from '../components/timebar';
import HeroSection from '../components/herosection';

const Page = () => {
  return (
    <div className="flex flex-col px-4 lg:px-10">
      {/* Category Section */}
      <div className="hidden lg:block w-full lg:w-1/3">
        {/* Hidden on smaller screens and visible only on large screens */}
        <Category />
      </div>

      {/* Timebar Section */}
      <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
        <Timebar />
      </div>

      {/* Hero Section */}
      <div className="w-full mt-6">
        <HeroSection />
      </div>
    </div>
  );
};

export default Page;