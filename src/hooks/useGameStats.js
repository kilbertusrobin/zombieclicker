import { useState, useEffect } from 'react';
import useScore from './useScore';
import useUpgradeCard from './useUpgradeCard';

const useGameStats = () => {
  const { score, setScore } = useScore();
  const [totalTimePlayed, setTotalTimePlayed] = useState(() => {
    const savedTime = localStorage.getItem('totalTimePlayed');
    return savedTime ? parseInt(savedTime, 10) : 0;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalTimePlayed(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('totalTimePlayed', totalTimePlayed);
  }, [totalTimePlayed]);

  const resetGame = () => {
    localStorage.clear();
    setScore(0);
    setTotalTimePlayed(0);
    for (let i = 0; i <= 6; i++) {
      localStorage.setItem(`upgrade_${i}`, 0);
    }
    window.location.reload();
  };

  return { score, totalTimePlayed, resetGame };
};

export default useGameStats;
