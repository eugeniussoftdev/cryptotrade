'use client'
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        type="button"
        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:bg-gray-300"
        onClick={toggleDropdown}
      >
        Select an option
      </button>
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
            className="block w-full px-4 py-2 bg-[#100028] focus:outline-none"
          />
          <ul className="divide-y divide-gray-300">
            {filteredOptions.map((option) => (
              <li key={option} className="px-4 py-2 hover:bg-gray-100">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
