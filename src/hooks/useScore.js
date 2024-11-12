import { useState, useEffect } from 'react';

const useScore = () => {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  };

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  return { score, incrementScore, setScore };
};

export default useScore;
