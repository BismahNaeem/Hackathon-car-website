import Link from 'next/link';
import Cards from './cards'
import Image from 'next/image';

const YourComponent = () => {
  return (
    <div className="  flex flex-wrap gap-x-4 ">
      {/* Main Div with Blue Background */}
      <div className="bg-blue-500 h-[360px] w-[25rem]  ml-8  lg:w-[400px] p-4 flex flex-col items-start justify-center rounded-md">
        {/* Heading */}
        <h1 className="text-white text-3xl font-semibold text-left">
          Sports car with the best <br />
          design and acceleration
        </h1>

        {/* Paragraph */}
        <p className="mt-6 w-72 text-white text-md text-left">
          Safety and comfort while driving a <br />
          futuristic and elegant sports car
        </p>

        {/* Car Image in the Center */}
        <div className="mt-10 flex justify-center items-center">
          <Image src="/images/car2.png" alt="Sports Car" height={100} width={500} className="w-auto h-auto" />
        </div>
      </div>

      {/* Right Side Div with bg-white */}
      <div className="bg-white h-auto  w-[25rem] ml-8 lg:w-[400px] p-4 rounded-md lg:ml-0">
        {/* Content of the Right Side Div */}
        <div className="flex justify-end">
          <Image src="/images/like.png" alt="Heart Icon" height={100} width={500} className="w-6 h-6" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">Nissan GT – R</h2>

        {/* Star Rating and Review Count */}
        <div className="flex items-center mt-2">
          <div className="text-red-500">
            ★ ★ ★ ★ <span className="text-gray-300">★</span>
          </div>
          <span className="text-sm text-gray-600 ml-2">440+ Reviewer</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-4">
          NISMO has become the embodiment of Nissan s outstanding performance, inspired by the most unforgiving proving ground, the
          <span className="italic">race track</span>.
        </p>

        {/* Details */}
        <div className="grid grid-cols-2 gap-y-2 mt-6 text-sm text-gray-600">
          <div className="font-semibold">Type Car</div>
          <div>Sport</div>
          <div className="font-semibold">Steering</div>
          <div>Manual</div>
          <div className="font-semibold">Capacity</div>
          <div>2 Person</div>
          <div className="font-semibold">Gasoline</div>
          <div>70L</div>
        </div>

        {/* Pricing and Button */}
        <div className="flex items-center justify-between mt-6">
          <div>
            <span className="text-xl font-bold text-gray-800">$80.00</span>
            <span className="text-sm line-through text-gray-400 ml-2">$100.00</span>
            <span className="text-xs text-gray-500">/ days</span>
          </div>

          <Link href="/payment">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
              Rent Now
            </button>
          </Link>
        </div>
      </div>

      {/* Three Divs Below the Main Div */}
      <div className="flex gap-x-4 mt-4 flex-wrap w-full ">
        <div className="h-[100px] w-[120px] bg-[#3563E9] rounded-lg">
          <Image src="/images/car2.png" alt="Image 1" height={50} width={50} className="h-full w-full object-contain" />
        </div>
        <div className="h-[100px] w-[120px]  rounded-lg">
          <Image src="/images/cars.png" alt="Image 2" height={100} width={100} className="h-full w-full object-contain" />
        </div>
        <div className="h-[100px] w-[120px]  rounded-lg">
          <Image src="/images/carss.png" alt="Image 3" height={100} width={100} className="h-full w-full object-contain" />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white rounded-lg mr-6 h-auto p-6 flex flex-col mt-2 max-w-4xl sm:w-[100%] md:w-[1016px]">
        {/* Left Side of the Div */}
        <div className='flex gap-x-4'>
          <h1 className='mt-2 font-bold'>Reviews</h1>
          <button className='bg-[#3563e9] h-8 w-12 rounded-lg text-white'>14</button>
        </div>

        <div className="flex flex-col">
          {/* First Review */}
          <div className="flex items-center gap-4 mb-4 mt-6">
            {/* Circle Image */}
            <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
              <Image src="/images/profil.png" alt="Reviewer" className="w-full h-full object-cover" height={100} width={100} />
            </div>

            {/* Reviewer Information */}
            <div>
              <p className="font-bold">Alex Stanton</p>
              <p className="text-sm text-gray-500">CEO of Blake Poole</p>
            </div>
          </div>

          {/* Reviewer's Paragraph */}
          <p className="text-gray-700 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>

          {/* Second Review */}
          <div className="flex items-center gap-4 mb-4">
            {/* Circle Image */}
            <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
              <Image src="/images/profil.png" alt="Reviewer" className="w-full h-full object-cover" height={100} width={100} />
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
              <Image src="/images/arrow.png" alt="Icon" className="object-cover" height={50} width={40} />
            </div>
          </div>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default YourComponent;