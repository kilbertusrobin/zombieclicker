import React from 'react';

const UpgradeValise = ({ title, distancePrice, income, cap, img, onUpgrade, currentSpeed }) => {
    // Formater le cap pour l'affichage
    const formattedCap = cap !== 'win' ? `${cap} km/h` : 'win';

    // Vérifier si l'amélioration est disponible
    const isAvailable = cap === 'win' || currentSpeed < parseFloat(cap);

    // Gérer le clic sur l'amélioration
    const handleClick = () => {
        if (isAvailable) {
            onUpgrade(distancePrice, income, cap);
        }
    };

    return (
        <div
            className={`w-[90%] h-28 border-b border-white text-white flex items-center ${
                isAvailable ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={handleClick}
        >
            <div className='w-2/3 flex items-center justify-around'>
                <div className='w-2/5 h-full flex flex-col items-start justify-center gap-1'>
                    <p className='font-bold text-xl'>{title}</p>
                    <p>Coût : {distancePrice}</p>
                </div>
                <div className='w-2/5 h-full flex flex-col items-start justify-center gap-1'>
                    <p>Revenu : {income} km/h</p>
                    <p>Cap : {formattedCap}</p>
                </div>
            </div>
            <img src={`./assets/${img}`} className='h-2/3 w-auto' alt='upgrade' />
        </div>
    );
};

export default UpgradeValise;