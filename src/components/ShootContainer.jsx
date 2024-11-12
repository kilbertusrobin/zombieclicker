import React from 'react';
import ShowShoot from './ShowShoot';
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
      <ShowShoot npm={7.5} type={"bonk"} />
      <PewEffect pewPositions={pewPositions} />
    </div>
  );
};

export default ShootContainer;
