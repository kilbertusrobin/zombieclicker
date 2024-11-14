import React from 'react';

const UpgradeValise = ({ title, distancePrice, income, cap, img, onUpgrade }) => {
    if (cap !== 'win') {
        cap = cap + ' km/h';
    }

    const handleClick = () => {
        onUpgrade(distancePrice, income);
    };

    return (
        <div className='w-[90%] h-28 border-b border-white text-white flex items-center flex' onClick={handleClick}>
            <div className='w-2/3 flex items-center justify-around'>
                <div className='w-2/5 h-full flex flex-col items-start justify-center gap-1'>
                    <p className='font-bold text-xl'>{title}</p>
                    <p>Coût : {distancePrice}</p>
                </div>
                <div className='w-2/5 h-full flex flex-col items-start justify-center gap-1'>
                    <p>Revenu : {income}km/h</p>
                    <p>Cap : {cap}</p>
                </div>
            </div>
            <img src={`./assets/${img}`} className='h-2/3 w-auto' alt='upgrade' />
        </div>
    );
};

export default UpgradeValise;
