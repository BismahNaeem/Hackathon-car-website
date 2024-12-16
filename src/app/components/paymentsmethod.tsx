import React from "react";
import Image from "next/image";

const PaymentMethod: React.FC = () => {
  return (
    <div className="h-[596px] w-[852px] bg-white p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* PaymentMethod Title */}
        <h1 className="text-2xl font-bold">Payment Method</h1>
        {/* Step 3 of 4 */}
        <p className="text-lg font-medium text-gray-700">Step 3 of 4</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500">
        Please enter your payment method
      </p>

      {/* Created Card Section */}
      <div className="flex justify-between items-center gap-x-4">
        {/* Left Side Image */}
        <div className="flex items-center gap-x-2">
          <Image
            src="path-to-your-picture.jpg"
            alt="Created Card"
            height={100} width={100}
            className="h-12 w-12"
          />
          <p className="text-lg font-medium text-gray-700">Created Card</p>
        </div>
        {/* Right Side Logo */}
        <div className="flex items-center gap-x-2">
          <Image
            src="path-to-your-logo.jpg"
            alt="Logo"
            height={100} width={100}
            className="h-12 w-12"
          />
        </div>
      </div>

      {/* Card Number Section */}
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
        {/* Card Number */}
        <div className="flex flex-col sm:w-[396px]">
          <label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            id="cardNumber"
            type="text"
            placeholder="Card Number"
            className="h-[56px] border border-gray-300 rounded-md px-3"
          />
        </div>
        {/* Explanation Date */}
        <div className="flex flex-col sm:w-[396px]">
          <label htmlFor="expirationDate" className="text-sm font-medium text-gray-700">
            Expiration Date
          </label>
          <input
            id="expirationDate"
            type="text"
            placeholder="00-MM-YY"
            className="h-[56px] border border-gray-300 rounded-md px-3"
          />
        </div>
      </div>

      {/* Card Holder Section */}
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
        {/* Card Holder */}
        <div className="flex flex-col sm:w-[396px]">
          <label htmlFor="cardHolder" className="text-sm font-medium text-gray-700">
            Card Holder
          </label>
          <input
            id="cardHolder"
            type="text"
            placeholder="Card Holder"
            className="h-[56px] border border-gray-300 rounded-md px-3"
          />
        </div>
        {/* CVC */}
        <div className="flex flex-col sm:w-[396px]">
          <label htmlFor="cvc" className="text-sm font-medium text-gray-700">
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            placeholder="CVC"
            className="h-[56px] border border-gray-300 rounded-md px-3"
          />
        </div>
      </div>

      {/* Payment Options */}
      <div className="flex flex-col gap-y-4">
        {/* PayPal Option */}
        <div className="flex items-center gap-x-2">
          <div className="h-6 w-6 rounded-full border border-gray-500"></div>
          <p className="text-sm text-gray-700">PayPal</p>
          <Image
            src="path-to-your-paypal-logo.jpg"
            alt="PayPal"
            className="h-6 w-6"
            height={100} width={100}
          />
        </div>

        {/* Bitcoin Option */}
        <div className="flex items-center gap-x-2">
          <div className="h-6 w-6 rounded-full border border-gray-500"></div>
          <p className="text-sm text-gray-700">Bitcoin</p>
          <Image
            src="path-to-your-bitcoin-logo.jpg"
            alt="Bitcoin"
            height={100} width={100}
            className="h-6 w-6"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;