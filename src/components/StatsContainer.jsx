import React from 'react';
import useGameStats from '../hooks/useGameStats';

const StatsContainer = () => {
  const { totalTimePlayed, resetGame } = useGameStats();

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div className="w-full p-4 text-center text-white bg-transparent">
      <h2 className="text-xl font-bold mb-2">Statistiques</h2>
      <p>Temps de jeu total : {formatTime(totalTimePlayed)}</p>
      <button
        onClick={resetGame}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Recommencer le jeu
      </button>
    </div>
  );
};

export default StatsContainer;
