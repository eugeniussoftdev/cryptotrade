"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Modal } from "../../components/Modal";
import { CurrencyList } from "../Modals/CurrencyList/CurrencyList.component";


export const CryptoExchange = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState<any>([]);

  return (
    <div className="w-96 h-80 rounded-2xl bg-[#271A3E] p-4">
      <button
        className="py-2 px-6 border-2 border-emerald-500 text-emerald-500 rounded-2xl hover:border-emerald-300 hover:text-emerald-300"
        onClick={() => setIsModalOpen(true)}
      >
        Add Curryncy Pairs
      </button>
      <div className="flex flex-col mb-4 mt-2">
        <span>Pay with</span>
        <span>Currency: {selectedCurrencyPair[0]?.name}</span>
        <span className="text-2xl">0.0</span>
      </div>
      <div className="flex flex-col mb-4">
        <span>You receive</span>
        <span>Currency: {selectedCurrencyPair[1]?.name}</span>
        <span className="text-2xl">0.0</span>
      </div>
      <div className="flex justify-center">
        <Link
          href="/order-book"
          className="py-2 px-6 border-2 border-rose-500 text-rose-500 rounded-2xl hover:border-rose-400 hover:text-rose-400"
        >
          Order Book
        </Link>
      </div>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onApply={(data: any) => {
            setSelectedCurrencyPair(data);
            setIsModalOpen(false);
          }}
        >
          <CurrencyList />
        </Modal>
      )}
    </div>
  );
};
