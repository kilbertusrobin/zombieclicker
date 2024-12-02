import { useState, useEffect, useCallback } from 'react';

const useProjectiles = () => {
  // État pour les projectiles, initialisé avec des valeurs par défaut
  const [projectiles, setProjectiles] = useState({
    bonk: 0,
    pew: 0,
    boom: 0,
    kaboom: 0,
  });

  // Fonction pour ajouter des projectiles d'un type spécifique
  const addProjectile = useCallback((type, count = 1) => {
    setProjectiles(prev => ({ ...prev, [type]: prev[type] + count }));
  }, []);

  // Fonction pour réinitialiser les projectiles
  const resetProjectiles = () => {
    setProjectiles({ bonk: 0, pew: 0, boom: 0, kaboom: 0 });
  };

  return { projectiles, addProjectile, resetProjectiles };
};

export default useProjectiles;