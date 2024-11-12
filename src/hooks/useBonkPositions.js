import { useState, useEffect } from 'react';

const useBonkPositions = (npm, containerWidth, containerHeight) => {
  const [bonkPositions, setBonkPositions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBonkPosition = {
        id: Date.now(),
        x: Math.random() * (containerWidth - 55),
        y: Math.random() * (containerHeight - 55),
        rotation: (Math.random() * 90) - 45,
      };

      setBonkPositions((prevPositions) => [...prevPositions, newBonkPosition]);

      setTimeout(() => {
        setBonkPositions((prevPositions) =>
          prevPositions.filter((position) => position.id !== newBonkPosition.id)
        );
      }, 500);
    }, 1000 / npm);

    return () => clearInterval(interval);
  }, [npm, containerWidth, containerHeight]);

  return bonkPositions;
};

export default useBonkPositions;
