import { useState, useEffect } from 'react';

const useShootPositions = (npm, containerWidth, containerHeight) => {
  // État pour les positions de tir
  const [shootPositions, setShootPositions] = useState([]);

  useEffect(() => {
    if (npm === 0) {
      return;
    }

    // Intervalle pour générer de nouvelles positions de tir
    const interval = setInterval(() => {
      const newPosition = {
        id: Date.now(),
        x: Math.random() * (containerWidth - 50),
        y: Math.random() * (containerHeight - 50),
        rotation: (Math.random() * 90) - 45,
      };

      // Ajouter la nouvelle position de tir à l'état
      setShootPositions((prevPositions) => [...prevPositions, newPosition]);

      // Supprimer la position de tir après 500ms
      setTimeout(() => {
        setShootPositions((prevPositions) =>
          prevPositions.filter((position) => position.id !== newPosition.id)
        );
      }, 500);
    }, 1000 / npm);

    // Nettoyer l'intervalle lorsque le composant est démonté ou lorsque npm change
    return () => clearInterval(interval);
  }, [npm, containerWidth, containerHeight]);

  return shootPositions;
};

export default useShootPositions;