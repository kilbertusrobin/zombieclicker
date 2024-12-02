import { useState, useEffect } from 'react';
import useScore from './useScore';
import useUpgradeCard from './useUpgradeCard';

const useGameStats = () => {
  const { score, setScore } = useScore();
  
  // État pour le temps total joué, initialisé à partir du localStorage
  const [totalTimePlayed, setTotalTimePlayed] = useState(() => {
    const savedTime = localStorage.getItem('totalTimePlayed');
    return savedTime ? parseInt(savedTime, 10) : 0;
  });

  // useEffect pour mettre à jour le temps total joué chaque seconde
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalTimePlayed(prevTime => prevTime + 1);
    }, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(timer);
  }, []);

  // useEffect pour sauvegarder le temps total joué dans le localStorage lorsque celui-ci change
  useEffect(() => {
    localStorage.setItem('totalTimePlayed', totalTimePlayed);
  }, [totalTimePlayed]);

  // Fonction pour réinitialiser le jeu
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