import React from 'react';

const PewEffect = ({ pewPositions }) => (
  <>
    {pewPositions.map((position) => (
      <div
        key={position.id}
        style={{
          // Positionner l'effet de tir "pew" en fonction des coordonnées
          position: 'absolute',
          left: `${position.x - 620}px`,
          top: `${position.y - 170}px`,
          // Définir l'image de fond pour l'effet de tir "pew"
          background: 'url(../assets/pewPlayer.png) no-repeat center center',
          width: '50px',
          height: '50px',
          backgroundSize: 'contain',
          // Ajouter des transitions pour un effet de mouvement fluide
          transition: 'top 0.1s, left 0.1s, transform 0.2s',
          // Appliquer une rotation aléatoire à l'effet de tir "pew"
          transform: `rotate(${position.rotation}deg)`,
        }}
      />
    ))}
  </>
);

export default PewEffect;