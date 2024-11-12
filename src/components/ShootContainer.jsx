import React from 'react';
import ShowShoot from './ShowShoot';
import usePewPositions from './../hooks/usePewPositions';
import PewEffect from './PewEffect';

const ShootContainer = ({ onZombieClick, npmBonk, npmPew, npmBoom, npmKaboom }) => {
  const { pewPositions, handleShoot } = usePewPositions();

  return (
    <div
      className="h-full w-full relative"
      onClick={(e) => {
        handleShoot(e);
        onZombieClick();
      }}
      style={{ position: 'relative' }}
    >
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <ShowShoot npm={npmBonk} type="bonk" />
        <ShowShoot npm={npmPew} type="pew" />
        <ShowShoot npm={npmBoom} type="boom" />
        <ShowShoot npm={npmKaboom} type="kaboom" />
      </div>
      <PewEffect pewPositions={pewPositions} />
    </div>
  );
};

export default ShootContainer;
