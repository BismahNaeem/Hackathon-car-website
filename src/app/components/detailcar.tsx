
import Cards from './cards'
import Image from 'next/image';
const YourComponent = () => {
    return (
      <div className="flex flex-wrap gap-x-4 ">
        {/* Main Div with Blue Background */}
        <div className="bg-blue-500 h-[360px] w-[400px] p-4 flex flex-col items-start justify-center rounded-md">
          {/* Heading */}
          <h1 className="mt-2 text-white text-2xl font-bold text-left">
            Sports Car with the Best
          </h1>
  
          {/* Paragraph */}
          <p className="mt-2 text-white text-lg text-left">
            Design and Acceleration <br />
            Safely and Comfort with Driving <br />
            Filantry and Deleging
          </p>
  
          {/* Car Image in the Center */}
          <div className="mt-4 flex justify-center items-center">
            <Image src="/path-to-your-image.jpg" alt="Sports Car" className="w-auto h-auto" />
          </div>
        </div>
  
        {/* Right Side Div with bg-white */}
        <div className="bg-white h-auto w-[400px]  p-4  rounded-md">
          {/* Content of the Right Side Div */}
          <h1 className="text-2xl font-bold text-left">Car Details</h1>
          <p className="mt-2">More information about the car goes here...</p>
        </div>
  
        {/* Three Divs Below the Main Div */}
        <div className="flex  gap-x-8 mt-4 flex-wrap w-full">
          <div className="h-[100px] w-[100px] bg-gray-300 rounded-lg">
            <Image src="/path-to-image1.jpg" alt="Image 1" className="h-full w-full object-cover" />
          </div>
          <div className="h-[100px] w-[100px] bg-gray-300 rounded-lg">
            <Image  src="/path-to-image2.jpg" alt="Image 2" className="h-full w-full object-cover" />
          </div>
          <div className="h-[100px] w-[100px] bg-gray-300 rounded-lg">
            <Image src="/path-to-image3.jpg" alt="Image 3" className="h-full w-full object-cover" />
          </div>
        </div>


       
      
    <div className="bg-white h-[300px] w-[1016px] p-6 flex flex-col mt-2">
      {/* Left Side of the Div */}
      <div className="flex flex-col">
        {/* First Review */}
        <div className="flex items-center gap-4 mb-4">
          {/* Circle Image */}
          <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
            <Image src="/path-to-your-image.jpg" alt="Reviewer" className="w-full h-full object-cover" />
          </div>

          {/* Reviewer Information */}
          <div>
            <p className="font-bold">Alex Stanton</p>
            <p className="text-sm text-gray-500">CEOF Blake Poole</p>
          </div>
        </div>

        {/* Reviewer's Paragraph */}
        <p className="text-gray-700 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>

        {/* Second Review (added below the first one) */}
        <div className="flex items-center gap-4 mb-4">
          {/* Circle Image */}
          <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
            <Image src="/path-to-your-image.jpg" alt="Reviewer" className="w-full h-full object-cover" />
          </div>

          {/* Reviewer Information */}
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-sm text-gray-500">Founder of SpeedTech</p>
          </div>
        </div>

        {/* Reviewer's Paragraph */}
        <p className="text-gray-700 text-sm mb-4">
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        {/* Show All Button */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <p className="text-blue-500 cursor-pointer">Show All</p>
          <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
            <Image src="/path-to-your-image.jpg" alt="Icon" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <Cards />
  


      </div>
      
    );
  };
  
  export default YourComponent;