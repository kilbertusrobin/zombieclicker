import { useState, useCallback } from 'react';

const usePewPositions = () => {
  // État pour les positions des tirs "pew"
  const [pewPositions, setPewPositions] = useState([]);

  // Fonction pour gérer le tir
  const handleShoot = useCallback((e) => {
    const { clientX, clientY } = e;
    const newPewPosition = {
      id: Date.now(),
      x: clientX,
      y: clientY,
      rotation: (Math.random() * 75) - 45,
    };

    // Ajouter la nouvelle position de tir à l'état
    setPewPositions((prevPositions) => [...prevPositions, newPewPosition]);

    // Supprimer la position de tir après 500ms
    setTimeout(() => {
      setPewPositions((prevPositions) =>
        prevPositions.filter((position) => position.id !== newPewPosition.id)
      );
    }, 500);
  }, []);

  return { pewPositions, handleShoot };
};

export default usePewPositions;