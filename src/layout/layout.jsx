// Layout.js
import React, { useEffect, useRef } from 'react';
import ZombieContainer from '../components/zombieContainer';
import ScoreContainer from '../components/ScoreContainer';
import useScore from '../hooks/useScore';
import ShootContainer from '../components/ShootContainer';
import AllUpgradeCards from "../components/AllUpgradeCards";

const Layout = () => {
  const { score, incrementScore, setScore } = useScore();

  // Références aux upgrades pour calculer leurs revenus
  const upgradeRefs = useRef([
    { incomeRate: 1, quantity: 0 },
    { incomeRate: 10, quantity: 0 },
    { incomeRate: 50, quantity: 0 },
    { incomeRate: 100, quantity: 0 },
    { incomeRate: 250, quantity: 0 },
    { incomeRate: 500, quantity: 0 },
    { incomeRate: 1000, quantity: 0 },
  ]);

  // Fonction pour mettre à jour les quantités depuis `AllUpgradeCards`
  const updateUpgradeQuantity = (index, quantity) => {
    upgradeRefs.current[index].quantity = quantity;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Calcule le revenu total basé sur les quantités et les incomeRates de chaque carte
      const totalIncome = upgradeRefs.current.reduce(
        (acc, { incomeRate, quantity }) => acc + incomeRate * quantity,
        0
      );
      setScore(prevScore => prevScore + totalIncome);
    }, 1000); // Mise à jour toutes les secondes

    return () => clearInterval(interval);
  }, [setScore]);

  return (
    <div className="relative flex h-full w-full">
      <div className="flex-1 bg-blue-500 h-100 overflow-y-auto">
        <AllUpgradeCards score={score} setScore={setScore} updateUpgradeQuantity={updateUpgradeQuantity} />
      </div>
      <div className="flex-[2_2_0%] relative bg-[url('/assets/zombie-bg.webp')] bg-cover h-full zombie">
        <div className='w-48 h-48 rounded-lg absolute border left-[14.5rem] top-36 border-red-500 zombie'>
          <ShootContainer onZombieClick={incrementScore} />
        </div>
        <ZombieContainer />
      </div>
      <div className="flex-1 flex flex-col bg-green-500 h-full">
        <div className='w-full h-1/2'>
          <ScoreContainer score={score} persecond={upgradeRefs.current.reduce((acc, { incomeRate, quantity }) => acc + incomeRate * quantity, 0)}/>
        </div>
        <div className='w-full h-1/2'>
        </div>
      </div>
    </div>
  );
};

export default Layout;
