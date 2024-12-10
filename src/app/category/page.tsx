import React from 'react';
import Category from '../components/category';
import Timebar from '../components/timebar';
import HeroSection from '../components/herosection';

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-10 px-4 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Category Section (visible only on large screens) */}
      <div className="hidden lg:block w-full lg:w-1/3">
        <Category />
      </div>

      {/* Timebar Section */}
      <div className="w-full lg:w-1/3">
        <Timebar />
      </div>

      {/* Hero Section */}
      <div className="w-full lg:w-1/3">
        <HeroSection />
      </div>
    </div>
  );
};

export default Page;