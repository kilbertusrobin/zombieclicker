import React from 'react';

const PewEffect = ({ pewPositions }) => (
  <>
    {pewPositions.map((position) => (
      <div
        key={position.id}
        className="pew-effect"
        style={{
          // Positionner l'effet de tir "pew" en fonction des coordonnées
          left: `${position.x - 620}px`,
          top: `${position.y - 170}px`,
          // Appliquer une rotation aléatoire à l'effet de tir "pew"
          transform: `rotate(${position.rotation}deg)`,
        }}
      />
    ))}
  </>
);

export default PewEffect;