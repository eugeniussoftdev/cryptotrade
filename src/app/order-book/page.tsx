"use client";
import React, { useEffect, useState } from "react";


const OrderBook = () => {
  const [orderBookData, setOrderBookData] = useState<any>([]);
  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@depth"
    );

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
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex gap-8 p-24 h-full overflow-auto">
        <div>
          {orderBookData[0]?.map(([price, qty]: any) => {
            return <p key={price+qty}>{price} {qty}</p>;
          })}
        </div>
        <div>
          {orderBookData[1]?.map(([price, qty]: any) => {
            return <p key={price+qty}>{price} {qty}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
