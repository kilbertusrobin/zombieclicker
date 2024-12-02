import React from 'react';
import ShowShoot from './ShowShoot';
import usePewPositions from './../hooks/usePewPositions';
import PewEffect from './PewEffect';

const ShootContainer = ({ onZombieClick, npmBonk, npmPew, npmBoom, npmKaboom }) => {
  // Utilisation du hook personnalisé pour gérer les positions des tirs "pew"
  const { pewPositions, handleShoot } = usePewPositions();

  return (
    <div
      className="h-full w-full relative"
      onClick={(e) => {
        // Gérer le tir et l'incrémentation du score lorsque l'utilisateur clique
        handleShoot(e);
        onZombieClick();
      }}
      style={{ position: 'relative' }}
    >
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {/* Afficher les différents types de tirs */}
        <ShowShoot npm={npmBonk} type="bonk" />
        <ShowShoot npm={npmPew} type="pew" />
        <ShowShoot npm={npmBoom} type="boom" />
        <ShowShoot npm={npmKaboom} type="kaboom" />
      </div>
      {/* Afficher les effets des tirs "pew" */}
      <PewEffect pewPositions={pewPositions} />
    </div>
  );
};

export default ShootContainer;