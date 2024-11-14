import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useScore from '../hooks/useScore';
import useProjectiles from '../hooks/useProjectiles';
import useKonamiCode from '../hooks/useKonamiCode';
import GameLayout from '../components/GameLayout';

const Layout = () => {
  const { score, incrementScore, setScore } = useScore();
  const { projectiles, addProjectile } = useProjectiles();
  const navigate = useNavigate();

  const { showSecretDiv, zoomClass, hideRain } = useKonamiCode();

  const upgradeRefs = useRef([
    { incomeRate: 1, quantity: 0 },
    { incomeRate: 5, quantity: 0 },
    { incomeRate: 25, quantity: 0 },
    { incomeRate: 50, quantity: 0 },
    { incomeRate: 125, quantity: 0 },
    { incomeRate: 250, quantity: 0 },
    { incomeRate: 500, quantity: 0 },
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
    <GameLayout
      score={score}
      setScore={setScore}
      updateUpgradeQuantity={updateUpgradeQuantity}
      incrementScore={incrementScore}
      projectiles={projectiles}
      upgradeRefs={upgradeRefs}
      showSecretDiv={showSecretDiv}
      zoomClass={zoomClass}
      hideRain={hideRain}
    />
  );
};

export default Layout;