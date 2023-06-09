import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import GuessHistory from './GuessHistory';
import NewGuess from './NewGuess';
import EndedGames from './EndedGames';
import NextMatches from './NextMatches';

const Home = () => {
  const { loggedInUsername, loggedInToken } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {loggedInUsername}, {loggedInToken}!</h2>
      <GuessHistory />
      <NewGuess />
      <EndedGames />
      <NextMatches />
    </div>
  );
};

export default Home;
