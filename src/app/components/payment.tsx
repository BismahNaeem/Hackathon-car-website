import React from "react";

const BillingInfo: React.FC = () => {
  return (
    <div className="h-auto w-full bg-white p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <div className="flex gap-x-72 items-center">
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
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3"
          />
        </div>
        {/* Phone Number */}
        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Phone Number"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3"
          />
        </div>
      </div>

      {/* Address and Time, City Section */}
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-6">
        {/* Address */}
        <div className="flex flex-col">
          <label htmlFor="address" className="text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3"
          />
        </div>
        {/* Time, City */}
        <div className="flex flex-col">
          <label
            htmlFor="timeCity"
            className="text-sm font-medium text-gray-700"
          >
            Time, City
          </label>
          <input
            id="timeCity"
            type="text"
            placeholder="Time, City"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;