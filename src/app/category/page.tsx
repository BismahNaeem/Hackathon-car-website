import React from 'react';
import Category from '../components/category';
import Timebar from '../components/timebar';
import HeroSection from '../components/herosection';

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-10">
      {/* Category Section */}
      <div className="w-full lg:w-1/3">
        <Category />
      </div>

      {/* Timebar Section */}
      <div className="w-full lg:w-2/3">
        <Timebar />
      </div>

      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>
    </div>
  );
};

export default Page;