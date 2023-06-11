"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


const OrderBook = () => {
  const [orderBookData, setOrderBookData] = useState<any>([]);
  const searchParams = useSearchParams();
  useEffect(() => {
    const coinPair = searchParams.get("pair");
    const URL = `wss://stream.binance.com:9443/ws/${coinPair?.toLocaleLowerCase()}@depth`;
    const socket = new WebSocket(URL);

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      const data: any = JSON.parse(event.data);
      setOrderBookData([data?.a, data?.b]);
      console.log(data);
    };

    return () => {
      socket.close();
    };
  }, [searchParams]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Bids</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderBookData[0]?.map(([price, qty]: any) => (
                <tr key={price + qty}>
                  <td className="py-1">{price}</td>
                  <td className="py-1">{qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Asks</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderBookData[1]?.map(([price, qty]: any) => (
                <tr key={price + qty}>
                  <td className="py-1">{price}</td>
                  <td className="py-1">{qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
