import React from 'react';
import useBonkPositions from './../hooks/useBonkPositions';
import useBonkContainerDimensions from './../hooks/useBonkContainerDimensions';

const ShowBonk = ({ npm }) => {
  const { containerRef, width, height } = useBonkContainerDimensions();
  const bonkPositions = useBonkPositions(npm, width, height);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {bonkPositions.map((position) => (
        <img
          key={position.id}
          src="./assets/bonk.png"
          alt="bonk"
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '50px',
            height: '50px',
            pointerEvents: 'none',
            transform: `rotate(${position.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default ShowBonk;
