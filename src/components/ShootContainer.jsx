import React, { useState } from 'react';

const ShootContainer = ({ onZombieClick }) => {
  const [pewPositions, setPewPositions] = useState([]);

  const handleShoot = (e) => {
    const { clientX, clientY } = e;
    const newPewPosition = {
      id: Date.now(),
      x: clientX,
      y: clientY,
      rotation: (Math.random() * 75) - 45,
    };

    setPewPositions((prevPositions) => [...prevPositions, newPewPosition]);
    onZombieClick();

    setTimeout(() => {
      setPewPositions((prevPositions) =>
        prevPositions.filter((position) => position.id !== newPewPosition.id)
      );
    }, 500);
  };

  return (
    <div 
      className="h-full w-full" 
      onClick={handleShoot}
      style={{ position: 'relative' }}
    >
      {pewPositions.map((position) => (
        <div
          key={position.id}
          style={{
            position: 'absolute',
            left: `${position.x - 620}px`,
            top: `${position.y - 170}px`,
            background: 'url(../assets/pew.png) no-repeat center center',
            width: '50px',
            height: '50px',
            backgroundSize: 'contain',
            transition: 'top 0.1s, left 0.1s, transform 0.2s',
            transform: `rotate(${position.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootContainer;
