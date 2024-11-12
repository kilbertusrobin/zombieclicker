import { useState, useCallback } from 'react';

const usePewPositions = () => {
  const [pewPositions, setPewPositions] = useState([]);

  const handleShoot = useCallback((e) => {
    const { clientX, clientY } = e;
    const newPewPosition = {
      id: Date.now(),
      x: clientX,
      y: clientY,
      rotation: (Math.random() * 75) - 45,
    };

    setPewPositions((prevPositions) => [...prevPositions, newPewPosition]);

    setTimeout(() => {
      setPewPositions((prevPositions) =>
        prevPositions.filter((position) => position.id !== newPewPosition.id)
      );
    }, 500);
  }, []);

  return { pewPositions, handleShoot };
};

export default usePewPositions;
