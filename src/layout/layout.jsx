import React from 'react';
import ZombieContainer from '../components/zombieContainer';
import UpgradeCard from "../components/upgradeCard";
import ScoreContainer from '../components/ScoreContainer';
const Layout = () => {

  return (
    <div className=" relative flex h-full w-full">
      <div className="flex-1 bg-blue-500 h-full"></div>
        <div className="flex-[2_2_0%] bg-[url('/assets/zombie-bg.webp')] bg-cover h-full">
            <ZombieContainer />
        </div>
      <div className="flex-1 flex flex-col bg-green-500 h-full">
        <div className='w-full h-1/2'>
            <ScoreContainer />
        </div>
        <div className='w-full h-1/2'></div>
      </div>
      <div className='w-48 h-48 rounded-lg absolute border top-36 left-[38rem] border-red-500'>
x      <UpgradeCard name="Soldat" image="/assets/cursor.png" price="100" quantity="1"/>
      </div>
    </div>
  );
};

export default Layout;