import React from "react";

const BillingInfo: React.FC = () => {
  return (
    <div className="h-auto w-auto ml-2   max-w-4xl bg-white  rounded-lg p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <div className="flex justify-between  items-center">
        {/* Billing Info Title */}
        <h1 className="text-2xl font-bold">Billing Info</h1>
        {/* Step 1 of 4 */}
        <p className="text-lg font-medium text-gray-700">Step 1 of 4</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500">Your Billing Info</p>

      {/* Name and Phone Number Section */}
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-1xl  font-bold  text-black">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
        {/* Phone Number */}
        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="text-1xl font-bold text-black"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Phone Number"
            className="h-[56px]  md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
      </div>

      {/* Address and Time, City Section */}
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-6">
        {/* Address */}
        <div className="flex flex-col">
          <label htmlFor="address" className="text-1xl  font-bold  text-black">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
        {/* Time, City */}
        <div className="flex flex-col">
          <label
            htmlFor="timeCity"
            className="text-1xl  font-bold  text-black"
          >
            Time, City
          </label>
          <input
            id="timeCity"
            type="text"
            placeholder="Time, City"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;