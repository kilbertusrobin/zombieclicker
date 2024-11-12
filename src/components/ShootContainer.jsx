import React from 'react';
import ShowBonk from './ShowBonk';
import usePewPositions from './../hooks/usePewPositions';
import PewEffect from './PewEffect';

const ShootContainer = ({ onZombieClick }) => {
  const { pewPositions, handleShoot } = usePewPositions();

  return (
    <div
      className="h-full w-full"
      onClick={(e) => {
        handleShoot(e);
        onZombieClick();
      }}
      style={{ position: 'relative' }}
    >
      <ShowBonk npm={7.5} />
      <PewEffect pewPositions={pewPositions} />
    </div>
  );
};

export default ShootContainer;
