import React from 'react';

const PewEffect = ({ pewPositions }) => (
  <>
    {pewPositions.map((position) => (
      <div
        key={position.id}
        style={{
          position: 'absolute',
          left: `${position.x - 620}px`,
          top: `${position.y - 170}px`,
          background: 'url(../assets/pewPlayer.png) no-repeat center center',
          width: '50px',
          height: '50px',
          backgroundSize: 'contain',
          transition: 'top 0.1s, left 0.1s, transform 0.2s',
          transform: `rotate(${position.rotation}deg)`,
        }}
      />
    ))}
  </>
);

export default PewEffect;
