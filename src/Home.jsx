import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import GuessHistory from './GuessHistory';
import NewGuess from './NewGuess';
import EndedGames from './EndedGames';

const Home = () => {
  const { loggedInUsername, loggedInToken } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {loggedInUsername}, {loggedInToken}!</h2>
      <GuessHistory />
      <NewGuess />
      <EndedGames />
    </div>
  );
};

export default Home;
