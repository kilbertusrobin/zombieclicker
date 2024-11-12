import React, { useEffect, useRef } from 'react';
import ZombieContainer from '../components/ZombieContainer';
import ScoreContainer from '../components/ScoreContainer';
import useScore from '../hooks/useScore';
import ShootContainer from '../components/ShootContainer';
import AllUpgradeCards from "../components/AllUpgradeCards";
import useProjectiles from '../hooks/useProjectiles';

const Layout = () => {
  const { score, incrementScore, setScore } = useScore();
  const { projectiles, addProjectile } = useProjectiles();

  const upgradeRefs = useRef([
    { incomeRate: 1, quantity: 0 },
    { incomeRate: 10, quantity: 0 },
    { incomeRate: 50, quantity: 0 },
    { incomeRate: 100, quantity: 0 },
    { incomeRate: 250, quantity: 0 },
    { incomeRate: 500, quantity: 0 },
    { incomeRate: 1000, quantity: 0 },
  ]);

  const updateUpgradeQuantity = (index, quantity) => {
    const previousQuantity = upgradeRefs.current[index].quantity;
    upgradeRefs.current[index].quantity = quantity;

    if (quantity > previousQuantity) {
      if (index === 0) addProjectile('bonk');
      if ([1, 2].includes(index)) addProjectile('pew');
      if ([3, 4].includes(index)) addProjectile('boom');
      if ([5, 6].includes(index)) addProjectile('kaboom');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const totalIncome = upgradeRefs.current.reduce(
        (acc, { incomeRate, quantity }) => acc + incomeRate * quantity,
        0
      );
      setScore(prevScore => prevScore + totalIncome);
    }, 1000);

    return () => clearInterval(interval);
  }, [setScore]);

  return (
    <div className="relative flex h-full w-full">
      <div className="flex-1 bg-black overflow-y-auto">
        <AllUpgradeCards score={score} setScore={setScore} updateUpgradeQuantity={updateUpgradeQuantity} />
      </div>
      <div className="flex-[2_2_0%] relative bg-[url('/assets/zombie-bg.webp')] bg-cover h-full zombie">
        <div className='w-48 h-48 rounded-lg absolute border left-[14.5rem] top-36 border-red-500 zombie'>
          <ShootContainer onZombieClick={incrementScore} npmBonk={projectiles.bonk} npmPew={projectiles.pew} npmBoom={projectiles.boom} npmKaboom={projectiles.kaboom} />
        </div>
        <ZombieContainer />
      </div>
      <div className="flex-1 flex flex-col bg-black h-full">
        <div className='w-full h-1/2'>
          <ScoreContainer score={score} persecond={upgradeRefs.current.reduce((acc, { incomeRate, quantity }) => acc + incomeRate * quantity, 0)} />
        </div>
      </div>
    </div>
  );
};

export default Layout;