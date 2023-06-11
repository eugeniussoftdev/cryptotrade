import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  const wrapperStyle = `w-full flex justify-between h-14`;
  return (
    <div className={wrapperStyle}>
      <div className="flex items-center gap-2">
        <Image src="bitcoin-btc-logo.svg" alt="logo" width={28} height={28} />
        <span>Brand Name</span>
      </div>
      <div className="h-full w-96">
        <div className="relative h-14">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-2 rounded-full bg-[#271A3E] w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>Log</div>
    </div>
  );
};
