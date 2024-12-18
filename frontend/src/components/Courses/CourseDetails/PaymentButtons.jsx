import React from "react";

const PaymentButtons = () => (
  <div className="flex w-[70%] justify-between text-xs md:text-sm text-center">
    <div className="w-[48%]">
      <button className="w-full px-5 py-3 rounded-lg bg-black text-white hover:bg-transparent border hover:border-black hover:text-black">
        <p className="whitespace-nowrap">Pay Everyday & Enroll</p>
        <p className="mt-1">₹250</p>
      </button>
      <p className="mt-1">Charged Daily*</p>
    </div>
    <div className="w-[48%]">
      <button className="w-full px-5 py-3 rounded-lg bg-transparent text-black hover:bg-black border border-black hover:text-white">
        <p>Pay Once & Enroll</p>
        <p className="mt-1">₹8,000</p>
      </button>
      <p className="mt-1">Charged Once*</p>
    </div>
  </div>
);

export default PaymentButtons;
