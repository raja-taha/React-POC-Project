import React from "react";

const TileView = ({ coins, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="flex  flex-col flex-grow gap-1 min-w-[250px] p-4 border border-gray-200 rounded shadow-sm hover:shadow-lg transition-shadow"
        >
          <div className="flex gap-2 items-center">
            <img src={coin.image} alt="coin" width={30} />
            <p className="font-bold">{coin.name}</p>
          </div>
          <p>Price: {coin.current_price} USD</p>
          <p>Symbol: {coin.symbol.toUpperCase()}</p>
          <div className="flex justify-center">
            <button
              onClick={() => onSelect(coin)}
              className="mt-2 p-2 bg-blue text-white rounded"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileView;
