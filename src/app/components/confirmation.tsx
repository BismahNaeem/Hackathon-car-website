import React from "react";
import Image from "next/image";
const Confirmation: React.FC = () => {
  return (
    <div className="h-[700px] w-[900px] p-6 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* Confirmation Title */}
        <h1 className="text-4xl font-bold">Confirmation</h1>
        {/* Step 404 */}
        <p className="text-lg font-medium text-gray-700">Step 404</p>
      </div>

      {/* Description */}
      <p className="mt-4 text-lg text-gray-600">
        We're getting to the end, just a few more clicks and your retail is
        ready!
      </p>

      {/* Agreement Section */}
      <div className="mt-8 space-y-6">
        {/* I Agree with Sending Marketing Emails */}
        <div className="flex items-center gap-x-2">
          <div className="h-6 w-6 border border-gray-500"></div>
          <p className="text-sm text-gray-700">
            I agree with sending marketing and newsletter emails. No spam
            promised.
          </p>
        </div>

        {/* I Agree with Terms and Conditions */}
        <div className="flex items-center gap-x-2">
          <div className="h-6 w-6 border border-gray-500"></div>
          <p className="text-sm text-gray-700">
            I agree with our terms and conditions and privacy policy.
          </p>
        </div>

        {/* Rent Now Button */}
        <button className="bg-blue-500 text-white h-[56px] w-36  rounded-md mt-6">
          Rent Now
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-8 ">
        <Image
          src="path-to-your-image.jpg"
          alt="Confirmation"
          className=" h-36 w-36 object-cover"
        />
      </div>

      {/* Data Saved and Security Information */}
      <div className="mt-0">
        <h1 className="text-2xl font-semibold">All your data is saved</h1>
        <p className="mt-2 text-lg text-gray-600">
          We are using the most advanced security to provide you the best
          experience ever. Enough said.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;