import { useState, useEffect } from 'react';

const useShootPositions = (npm, containerWidth, containerHeight) => {
  const [shootPositions, setShootPositions] = useState([]);

  useEffect(() => {
    if (npm === 0) {
      return;
    }

    const interval = setInterval(() => {
      const newPosition = {
        id: Date.now(),
        x: Math.random() * (containerWidth - 50),
        y: Math.random() * (containerHeight - 50),
        rotation: (Math.random() * 90) - 45,
      };

      setShootPositions((prevPositions) => [...prevPositions, newPosition]);

      setTimeout(() => {
        setShootPositions((prevPositions) =>
          prevPositions.filter((position) => position.id !== newPosition.id)
        );
      }, 500);
    }, 1000 / npm);

    return () => clearInterval(interval);
  }, [npm, containerWidth, containerHeight]);

  return shootPositions;
};

export default useShootPositions;
