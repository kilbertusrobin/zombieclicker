import React from 'react';
import ZombieContainer from '../components/zombieContainer';
import ScoreContainer from '../components/ScoreContainer';
import useScore from '../hooks/useScore';
import ShootContainer from '../components/ShootContainer';
import AllUpgradeCards from "../components/AllUpgradeCards";

const Layout = () => {
  const { score, incrementScore } = useScore();

  return (
    <div className="relative flex h-full w-full">
      <div className="flex-1 bg-blue-500 h-100 overflow-y-auto">
      <AllUpgradeCards/>

      </div>
      <div className="flex-[2_2_0%] relative bg-[url('/assets/zombie-bg.webp')] bg-cover h-full zombie">
        <div className='w-48 h-48 rounded-lg absolute border left-[14.5rem] top-36 border-red-500 zombie'>
          <ShootContainer onZombieClick={incrementScore} />
        </div>
        <ZombieContainer/>
      </div>
      <div className="flex-1 flex flex-col bg-green-500 h-full">
        <div className='w-full h-1/2'>
          <ScoreContainer score={score} />
        </div>
        <div className='w-full h-1/2'>
        </div>
      </div>
    </div>
  );
};

export default Layout;
