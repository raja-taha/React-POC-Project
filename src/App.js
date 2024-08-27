import React, { useState, useEffect } from "react";
import HorizontalMenu from "./components/HorizontalMenu";
import GridView from "./components/GridView";
import TileView from "./components/TileView";
import DetailView from "./components/DetailView";
import axios from "axios";
import Spinner from "./components/Spinner";

const App = () => {
  const [view, setView] = useState("grid");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const server = "https://api.coingecko.com/api/v3";

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}&per_page=30`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCoin(null);
  };

  return (
    <div className="App">
      <HorizontalMenu />
      <div className="p-4">
        {loading && (
          <div className="flex justify-center my-10">
            <Spinner />
          </div>
        )}

        {error && <p>Failed to load data. Please try again later.</p>}
        {!loading && !error && (
          <>
            <div className="flex flex-col md:flex-row justify-between">
              <h1 className="text-[36px] font-bold ml-4">Crypto Coins</h1>
              <div className="m-4 md:m-0">
                <button
                  onClick={() => setView("grid")}
                  className="p-3 bg-blue text-white rounded-lg hover:bg-grey"
                  aria-label="Switch to grid view"
                >
                  Grid View
                </button>
                <button
                  onClick={() => setView("tile")}
                  className="p-3 bg-blue text-white rounded-lg ml-2 hover:bg-grey"
                  aria-label="Switch to tile view"
                >
                  Tile View
                </button>
              </div>
            </div>
            {view === "grid" && (
              <GridView coins={coins} onSelect={handleSelectCoin} />
            )}
            {view === "tile" && (
              <TileView coins={coins} onSelect={handleSelectCoin} />
            )}
            {isModalOpen && (
              <DetailView coin={selectedCoin} onClose={closeModal} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
