import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchInput = ({ onSearch, value }: any) => {
  return (
    <div className="relative h-14">
      <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="pl-8 pr-3 py-2 rounded-full  bg-[#271A3E] w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearch(e.target.value)}
        value={value}
      />
    </div>
  );
};
