import React from 'react';
import ZombieContainer from '../components/ZombieContainer';
import ScoreContainer from '../components/ScoreContainer';
import ShootContainer from '../components/ShootContainer';
import AllUpgradeCards from "../components/AllUpgradeCards";
import StatsContainer from '../components/StatsContainer';
import SecretDiv from '../components/SecretDiv';

const GameLayout = ({ score, setScore, updateUpgradeQuantity, incrementScore, projectiles, upgradeRefs, showSecretDiv, zoomClass, hideRain }) => {
  return (
    <div className="relative flex h-full w-full">
      <div className="flex-1 bg-black overflow-y-auto">
        {/* Afficher toutes les cartes d'amélioration */}
        <AllUpgradeCards score={score} setScore={setScore} updateUpgradeQuantity={updateUpgradeQuantity} />
      </div>
      <div className="flex-[2_2_0%] relative bg-[url('/assets/zombie-bg.webp')] bg-cover h-full zombie">
        <div className='w-48 h-48 rounded-lg absolute border left-[14.5rem] top-36 border-red-500 zombie'>
          {/* Conteneur pour gérer les tirs */}
          <ShootContainer onZombieClick={incrementScore} npmBonk={projectiles.bonk} npmPew={projectiles.pew} npmBoom={projectiles.boom} npmKaboom={projectiles.kaboom} />
        </div>
        {/* Conteneur pour afficher le zombie */}
        <ZombieContainer />
      </div>
      <div className="flex-1 flex flex-col bg-black h-full">
        <div className='w-full h-1/2'>
          {/* Afficher le score et les points gagnés par seconde */}
          <ScoreContainer score={score} persecond={upgradeRefs.current.reduce((acc, { incomeRate, quantity }) => acc + incomeRate * quantity, 0)} />
        </div>
        {/* Afficher les statistiques du jeu */}
        <StatsContainer />
      </div>

      {/* Afficher le div secret si le code Konami est entré */}
      <SecretDiv showSecretDiv={showSecretDiv} zoomClass={zoomClass} hideRain={hideRain} />
    </div>
  );
};

export default GameLayout;