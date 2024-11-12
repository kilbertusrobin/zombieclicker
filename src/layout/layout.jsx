import React from 'react';
import ZombieContainer from '../components/zombieContainer';
import UpgradeCard from "../components/UpgradeCard";
import ScoreContainer from '../components/ScoreContainer';

const Layout = () => {
    return (
        <div className="relative flex h-full w-full">
            <div className="flex-1 bg-blue-500 h-full">
                <UpgradeCard name="Soldat" image="/assets/cursor.png" initialPrice={100} initialQuantity={1}/>
            </div>
            <div className="flex-[2_2_0%] bg-[url('/assets/zombie-bg.webp')] bg-cover h-full">
                <ZombieContainer />
            </div>
            <div className="flex-1 flex flex-col bg-green-500 h-full">
                <div className='w-full h-1/2'>
                    <ScoreContainer />
                </div>
            </div>
        </div>
    );
};

export default Layout;