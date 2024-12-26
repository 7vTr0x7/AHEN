import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustments } from "react-icons/hi";

const SearchBar = () => (
  <div className="flex items-center gap-4">
    <div className="bg-white rounded-lg shadow-md flex items-center gap-2 px-2 py-3 w-[250px]">
      <CiSearch className="text-xl" />
      <input
        className="outline-none bg-transparent text-sm"
        placeholder="Search for vehicles"
      />
    </div>
    <span className="inline-block bg-black text-white rounded-md text-4xl">
      <HiOutlineAdjustments />
    </span>
  </div>
);

export default SearchBar;
