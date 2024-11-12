// UpgradeCard.js
import React, { useEffect } from 'react';
import useUpgradeCard from '../hooks/useUpgradeCard';

const UpgradeCard = ({ name, image, initialPrice, initialQuantity, incomeRate, score, setScore, updateQuantity }) => {
    const { price, quantity, income, handleClick } = useUpgradeCard(initialPrice, initialQuantity, incomeRate, score, setScore);

    // Mise à jour de la quantité dans le parent lorsqu'elle change
    useEffect(() => {
        updateQuantity(quantity);
    }, [quantity, updateQuantity]);

    return (
        <div onClick={handleClick} className="flex flex-row items-center border justify-between px-6 py-7 cursor-pointer base-cursor">
            <div className="flex flex-row gap-6 items-center">
                <div className="flex flex-col">
                    <img className='w-16 h-full' src={image} alt={name} />
                </div>
                <div className="flex flex-col">
                    <h2 className='text-2xl'>{name}</h2>
                    <p>Price: {price.toFixed(0)} Headshots</p>
                    <p>Income: {incomeRate} Headshots/sec</p>
                </div>
            </div>
            <p className='text-2xl'>{quantity}</p>
        </div>
    );
};

export default UpgradeCard;
