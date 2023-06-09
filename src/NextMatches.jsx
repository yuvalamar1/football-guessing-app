import React, { useEffect, useState } from 'react';
import './NextMatches.css';

const NextMatches = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchActiveGames = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/active-games'); // Replace with your API endpoint
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching active games:', error);
      }
    };

    fetchActiveGames();
  }, []);

  return (
<div className="next-matches-container">
      <h2>Next Matches</h2>
      {games.map((game) => (
        <div key={game._id} className="match-item">
          <img src={`/assets/${game.homeTeam}.png`} alt={game.homeTeam} />
          <h3>vs</h3>
          <img src={`/assets/${game.awayTeam}.png`} alt={game.awayTeam} />
        </div>
      ))}
      <button className="home-button">Home</button>
    </div>
  );
};

export default NextMatches;
