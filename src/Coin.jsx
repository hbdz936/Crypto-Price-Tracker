import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt={`${name} logo`} />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol.toUpperCase()}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            ₹{price ? price.toLocaleString() : 'N/A'}
          </p>
          <p className="coin-volume">
            Volume: ₹{volume ? volume.toLocaleString() : 'N/A'}
          </p>
          <p className={`coin-percent ${priceChange < 0 ? 'red' : 'green'}`}>
            {priceChange !== null && priceChange !== undefined
              ? `${priceChange.toFixed(2)}%`
              : 'N/A'}
          </p>
          <p className="coin-marketcap">
            Mkt Cap: ₹{marketcap ? marketcap.toLocaleString() : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
