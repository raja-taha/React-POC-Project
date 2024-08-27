import React from "react";

const GridView = ({ coins, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-10 gap-4 p-4">
      {coins.map((coin) => (
        <div
          key={coin.id}
          onClick={() => onSelect(coin)}
          className="flex flex-col items-center justify-center gap-2 p-4 border border-grey rounded-lg shadow-sm hover:shadow-lg transition-shadow"
        >
          <img src={coin.image} alt="coin" width={50} />
          <p className="text-center">{coin.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GridView;
