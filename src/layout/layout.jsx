import React, { useEffect, useRef, useState } from 'react';
import ZombieContainer from '../components/ZombieContainer';
import ScoreContainer from '../components/ScoreContainer';
import useScore from '../hooks/useScore';
import ShootContainer from '../components/ShootContainer';
import AllUpgradeCards from "../components/AllUpgradeCards";
import useProjectiles from '../hooks/useProjectiles';

const Layout = () => {
  const { score, incrementScore, setScore } = useScore();
  const { projectiles, addProjectile } = useProjectiles();

  const [showSecretDiv, setShowSecretDiv] = useState(false);
  const [zoomClass, setZoomClass] = useState('');
  const [hideRain, setHideRain] = useState(false);

  const upgradeRefs = useRef([
    { incomeRate: 1, quantity: 0 },
    { incomeRate: 10, quantity: 0 },
    { incomeRate: 50, quantity: 0 },
    { incomeRate: 100, quantity: 0 },
    { incomeRate: 250, quantity: 0 },
    { incomeRate: 500, quantity: 0 },
    { incomeRate: 1000, quantity: 0 },
  ]);

  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'
  ];
  const userInput = useRef([]);

  const checkKonamiCode = (key) => {
    userInput.current.push(key);
    if (userInput.current.length > konamiCode.length) {
      userInput.current.shift();
    }

    if (JSON.stringify(userInput.current) === JSON.stringify(konamiCode)) {
      setShowSecretDiv(true);
      setZoomClass('zoom-in');

      // Après 1.1 seconde, cacher la pluie, puis après 2.1 secondes, lancer le zoom out
      setTimeout(() => setHideRain(true), 1000);
      setTimeout(() => {
        setZoomClass('zoom-out');
        setTimeout(() => {
          setShowSecretDiv(false);
          setHideRain(false);
        }, 1000);
      }, 1100);
    }
  };

  const handleKeyDown = (event) => {
    checkKonamiCode(event.code);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

      {/* Div secrète avec animations de zoom et disparition de la pluie */}
      <div className={`absolute top-0 left-0 ${showSecretDiv ? 'flex' : 'hidden'} justify-center items-center w-full h-full`}>
        <div className='w-full h-full relative flex items-start justify-center overflow-hidden'>
          <img src='./assets/pluie.gif' className={`h-full w-full z-10 absolute ${hideRain ? 'fade-out' : ''}`} alt='pluie' />
          <h1 className={`z-30 ${zoomClass} mt-20 text-4xl text-red`}>LA VALISE MOBILE</h1>
          <img src='/assets/valise.gif' className={`h-full z-25 absolute ${zoomClass}`} alt='valise' />
        </div>
      </div>
    </div>
  );
};

export default Layout;
