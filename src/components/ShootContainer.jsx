import React from 'react';
import ShowShoot from './ShowShoot';
import usePewPositions from './../hooks/usePewPositions';
import PewEffect from './PewEffect';

const ShootContainer = ({ onZombieClick, npm }) => {
  if (!npm) {
    npm = 0;
  }
  if (npm > 15) {
    npm = 15;
  }
  
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
        <ShowShoot npm={npm} type="bonk" />
        <ShowShoot npm={npm} type="pew" />
        <ShowShoot npm={npm} type="boom" />
        <ShowShoot npm={npm} type="kaboom" />
      </div>
      <PewEffect pewPositions={pewPositions} />
    </div>
  );
};

export default ShootContainer;
