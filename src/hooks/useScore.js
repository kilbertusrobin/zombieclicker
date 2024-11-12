import { useState, useEffect } from 'react';

const useScore = () => {
  // Initialisation du score à partir du local storage
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore ? parseInt(savedScore, 10) : 10;
  });

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  };

  // Sauvegarder le score dans le local storage chaque fois qu'il change
  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  return { score, incrementScore, setScore };
};

export default useScore;
