import React from 'react';
import useShootPositions from '../hooks/useShootPositions';
import useShootContainerDimensions from '../hooks/useShootContainerDimensions';

const ShowShoot = ({ npm, type }) => {
  let src ='';
  if (type === 'pew') {
    src = './assets/pew.png';
  } else if (type === 'bonk') {
    src = './assets/bonk.png';
  }

  const { containerRef, width, height } = useShootContainerDimensions();
  const bonkPositions = useShootPositions(npm, width, height);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {bonkPositions.map((position) => (
        <img
          key={position.id}
          src= {src}
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

export default ShowShoot;
