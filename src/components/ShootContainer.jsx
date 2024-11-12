import React from 'react';

const ShootContainer = ({ onZombieClick }) => {
  const handleShoot = () => {
    console.log('Zombie clicked');
    onZombieClick();
  };

  return (
    <div 
      className="h-full w-full" 
      onClick={handleShoot}
    >
    </div>
  );
};

export default ShootContainer;
