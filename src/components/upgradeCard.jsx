import React from 'react';
import useUpgradeCard from '../hooks/useUpgradeCard';

const UpgradeCard = ({ name, image, initialPrice, initialQuantity, score, setScore }) => {
    const { price, quantity, handleClick } = useUpgradeCard(initialPrice, initialQuantity, score, setScore);

    return (
        <div onClick={handleClick} className="flex flex-row items-center border justify-between px-6 py-7 cursor-pointer">
            <div className="flex flex-row gap-6 items-center">
                <div className="flex flex-col">
                    <img className='w-16 h-full' src={image} alt={name} />
                </div>
                <div className="flex flex-col">
                    <h2 className='text-2xl'>{name}</h2>
                    <p>Price: {price.toFixed(2)} Headshot</p>
                </div>
            </div>
            <p className='text-2xl'>{quantity}</p>
        </div>
    );
};

export default UpgradeCard;