import React from 'react';
import useShootPositions from '../hooks/useShootPositions';
import useShootContainerDimensions from '../hooks/useShootContainerDimensions';

const ShowShoot = ({ npm, type }) => {
  let src = '';
  if (type === 'pew') {
    src = './assets/pew.png';
  } else if (type === 'bonk') {
    src = './assets/bonk.png';
  } else if (type === 'boom') {
    src = './assets/boom.png';
  } else if (type === 'kaboom') {
    src = './assets/kaboom.png';
  }

  const { containerRef, width, height } = useShootContainerDimensions();
  const shootPositions = useShootPositions(npm, width, height);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      {shootPositions.map((position) => {
        const x = Math.max(0, Math.min(position.x, width - 50));
        const y = Math.max(0, Math.min(position.y, height - 50));

        return (
          <img
            key={position.id}
            src={src}
            alt={type}
            style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              width: '50px',
              height: '50px',
              pointerEvents: 'none',
              transform: `rotate(${position.rotation}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ShowShoot;
