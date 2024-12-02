import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useScore from '../hooks/useScore';
import useProjectiles from '../hooks/useProjectiles';
import useKonamiCode from '../hooks/useKonamiCode';
import GameLayout from '../components/GameLayout';

const Layout = () => {
  // Utilisation des hooks personnalisés pour gérer le score, les projectiles et le code Konami
  const { score, incrementScore, setScore } = useScore();
  const { projectiles, addProjectile } = useProjectiles();
  const navigate = useNavigate();

  // Utilisation du hook personnalisé pour le code Konami
  const { showSecretDiv, zoomClass, hideRain } = useKonamiCode();

  // Références aux objets d'amélioration avec les taux de revenu et les quantités
  const upgradeRefs = useRef([
    { incomeRate: 1, quantity: 0 },
    { incomeRate: 10, quantity: 0 },
    { incomeRate: 50, quantity: 0 },
    { incomeRate: 100, quantity: 0 },
    { incomeRate: 250, quantity: 0 },
    { incomeRate: 500, quantity: 0 },
    { incomeRate: 1000, quantity: 0 },
  ]);

  // Fonction pour mettre à jour la quantité d'améliorations et ajouter des projectiles en fonction de l'index de l'amélioration
  const updateUpgradeQuantity = (index, quantity) => {
    const previousQuantity = upgradeRefs.current[index].quantity;
    upgradeRefs.current[index].quantity = quantity;

    // Ajouter des projectiles si la quantité augmente
    if (quantity > previousQuantity) {
      if (index === 0) addProjectile('bonk');
      if ([1, 2].includes(index)) addProjectile('pew');
      if ([3, 4].includes(index)) addProjectile('boom');
      if ([5, 6].includes(index)) addProjectile('kaboom');
    }
  };

  // useEffect pour mettre à jour le score en fonction du revenu total des améliorations toutes les secondes
  useEffect(() => {
    const interval = setInterval(() => {
      const totalIncome = upgradeRefs.current.reduce(
        (acc, { incomeRate, quantity }) => acc + incomeRate * quantity,
        0
      );
      setScore(prevScore => prevScore + totalIncome);
    }, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté
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