import React, { useEffect, useRef } from "react";

const DetailView = ({ coin, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <img src={coin.image} alt="coin" width={50} />
          <h2 className="text-2xl font-bold">
            {coin.name} ({coin.symbol.toUpperCase()})
          </h2>
        </div>
        <div className="p-2">
          <p>
            <span className="font-semibold">Price:</span> {coin.current_price}{" "}
            {coin.symbol.toUpperCase()}
          </p>
          <p>
            <span className="font-semibold">Market Cap: </span>
            {coin.market_cap}
          </p>
          <p>
            <span className="font-semibold">24h Volume: </span>
            {coin.total_volume}
          </p>
          <p>
            <span className="font-semibold">High 24h: </span>
            {coin.high_24h}
          </p>
          <p>
            <span className="font-semibold">Low 24h: </span>
            {coin.low_24h}
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <button className="p-2 bg-blue text-white rounded">Edit</button>
          <button className="p-2 bg-blue text-white rounded">Flag</button>
          <button className="p-2 bg-blue text-white rounded">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
