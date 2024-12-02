import { useState, useEffect } from 'react';

const useScore = () => {
  // État pour le score, initialisé à partir du localStorage ou à 0
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

  // Fonction pour incrémenter le score
  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  };

  // Sauvegarder le score dans le localStorage lorsque le score change
  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  return { score, incrementScore, setScore };
};

export default useScore;