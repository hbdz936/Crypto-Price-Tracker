import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import { FaSearch } from 'react-icons/fa';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        )
        .then((res) => {
          setCoins(res.data);
          console.log('Updated data:', res.data);
        })
        .catch((error) => {
          console.error(error);
          alert('Failed to fetch crypto data. Try again later.');
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setSearch(e.target.value);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="hero">
        <h1 className="hero-title">Largest<br />Crypto Marketplace</h1>
        <p className="hero-subtitle">
          Welcome to the world's largest cryptocurrency marketplace. <br />
          Sign up to explore more about cryptos.
        </p>
        <div className="hero-search">
          <input
            className="hero-input"
            type="text"
            placeholder="Search crypto..."
            onChange={handleChange}
            value={search}
          />
          <button className="hero-button">
            <FaSearch />
          </button>
        </div>
      </div>

    <table className="coin-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Coins</th>
      <th>Price</th>
      <th>24h Change</th>
      <th>Market Cap</th>
    </tr>
  </thead>
  <tbody>
    {filteredCoins.map((coin, index) => (
      <tr key={coin.id}>
        <td>{index + 1}</td>
        <td>
          <img src={coin.image} alt={coin.name} width="20" style={{ verticalAlign: 'middle', marginRight: 8 }} />
          {coin.name} - <strong>{coin.symbol.toUpperCase()}</strong>
        </td>
        <td>₹{coin.current_price.toLocaleString()}</td>
        <td className={coin.price_change_percentage_24h < 0 ? 'red' : 'green'}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </td>
        <td>₹{coin.market_cap.toLocaleString()}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}

export default App;
