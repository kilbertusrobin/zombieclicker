import React from 'react';
import ZombieContainer from '../components/zombieContainer';
import UpgradeCard from "../components/UpgradeCard";
import ScoreContainer from '../components/ScoreContainer';
import useScore from '../hooks/useScore';
import ShootContainer from '../components/ShootContainer';

const Layout = () => {
  const { score, incrementScore } = useScore();

  return (
    <div className="relative flex h-full w-full">
      <div className="flex-1 bg-blue-500 h-100 overflow-y-auto">
        <UpgradeCard name="Brute" image="/assets/batte.svg" initialPrice={30} initialQuantity={0}/>
        <UpgradeCard name="Pistolero" image="/assets/pistolet.svg" initialPrice={250} initialQuantity={0}/>
        <UpgradeCard name="Soldat" image="/assets/fusil.svg" initialPrice={1000} initialQuantity={0}/>
        <UpgradeCard name="Commando" image="/assets/commando.svg" initialPrice={3000} initialQuantity={0}/>
        <UpgradeCard name="Blindé" image="/assets/tank.svg" initialPrice={10000} initialQuantity={0}/>
        <UpgradeCard name="Bombardier" image="/assets/bombardier.svg" initialPrice={50000} initialQuantity={0}/>
        <UpgradeCard name="Annihilateur" image="/assets/annihilateur.svg" initialPrice={100000} initialQuantity={0}/>

      </div>
      <div className="flex-[2_2_0%] bg-[url('/assets/zombie-bg.webp')] bg-cover h-full zombie">
        <ZombieContainer/>
      </div>
      <div className="flex-1 flex flex-col bg-green-500 h-full">
        <div className='w-full h-1/2'>
          <ScoreContainer score={score} />
        </div>
        <div className='w-full h-1/2'>
        </div>
      </div>
      <div className='w-48 h-48 rounded-lg absolute border top-36 left-[38rem] border-red-500 zombie'>
        <ShootContainer onZombieClick={incrementScore} />
      </div>
    </div>
  );
};

export default Layout;
