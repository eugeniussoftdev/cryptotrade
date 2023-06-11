'use client'
import React, { useState } from "react";

export const Modal = ({ onClose, onApply, children }: any) => {
  const [selectedPair, setSelectedPair] = useState();
  
  const handleSelectedCurrencyPairs = (selectedCurrencyPair: any) => {
    setSelectedPair(selectedCurrencyPair);
  };
  return (
    <>
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0"
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-[#271A3E] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, {
                handleSelectedCurrencyPairs,
              });
            })}
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className="py-2 px-6 border-2 border-rose-500 text-rose-500 rounded-2xl"
                onClick={onClose}
              >
                <i className="fas fa-times"></i> Cancel
              </button>
              <button
                className="py-2 px-6 border-2 border-emerald-500 text-emerald-500 rounded-2xl"
                onClick={() => onApply(selectedPair)}
              >
                Apply Pairs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
