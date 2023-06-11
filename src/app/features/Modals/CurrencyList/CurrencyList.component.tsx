import React, { useEffect, useState } from "react";
import Image from "next/image";

import { SearchInput } from "@/app/components";
import { ASSETS_URL } from "@/app/constants/api.constants";

export const CurrencyList = ({ handleSelectedCurrencyPairs }: any) => {
  const [searchValue, setSearchValue] = useState("");
  const [coinsList, setCoinsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [originCoinsList, setOriginCoinsList] = useState<any>([]);
  const [chosenCurrencyPair, setChosenCurrencyPair] = useState<any>([
    null,
    null,
  ]);
  const [nextPairIndex, setNextPairIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      const response = await fetch(ASSETS_URL);

      const coinsData = await response.json();

      setCoinsList(coinsData.data.slice(0, 20));
      setOriginCoinsList(coinsData.data.slice(0, 20));
      setIsLoading(false);
    };

    load();
  }, []);

  useEffect(() => {
    if (searchValue.trim()) {
      const filteredCoins = originCoinsList.filter((coin: any) => {
        return coin?.name?.toLowerCase().includes(searchValue.toLowerCase());
      });

      setCoinsList(filteredCoins);
    }
  }, [originCoinsList, searchValue]);

  useEffect(() => {
    handleSelectedCurrencyPairs(chosenCurrencyPair);
  }, [chosenCurrencyPair]);

  const handleSelectCurrency = (currency: any) => {
    setChosenCurrencyPair((prevState: any) => {
      const newPrevState = [...prevState];
      newPrevState[nextPairIndex] = currency;
      return newPrevState;
    });
    setNextPairIndex(nextPairIndex === 0 ? 1 : 0);
  };

  return (
    <div className="p-2">
      <div>
        <SearchInput onSearch={setSearchValue} value={searchValue} />
      </div>
      <div className="flex p-4">
        <div
          className={`flex gap-2 w-1/2 ${
            nextPairIndex === 0 ? "border-2 border-rose-500" : ""
          } rounded-2xl`}
        >
          <span>Pay with:</span>
          <span>{chosenCurrencyPair[0]?.name}</span>
        </div>
        <div
          className={`flex gap-2 w-1/2 ${
            nextPairIndex === 1 ? "border-2 border-rose-500" : ""
          } rounded-2xl`}
        >
          <span>You receive:</span>
          <span>{chosenCurrencyPair[1]?.name}</span>
        </div>
      </div>
      <div className="h-96 overflow-auto">
        {isLoading ? (
          <div className="flex h-full w-full justify-center">
            <span>Loading...</span>
          </div>
        ) : (
          coinsList.map((coin: any) => {
            return (
              <div
                key={coin?.id}
                className="flex gap-4 p-4 rounded-2xl hover:bg-[#423951] cursor-pointer"
                onClick={() => handleSelectCurrency(coin)}
              >
                <Image
                  src="bitcoin-btc-logo.svg"
                  alt="logo"
                  width={28}
                  height={28}
                />
                <span>{coin.name}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
