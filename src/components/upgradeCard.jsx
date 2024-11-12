import React, { useState } from 'react';

const UpgradeCard = ({ name, image, initialPrice, initialQuantity }) => {
    const [price, setPrice] = useState(initialPrice);
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleClick = () => {
        setPrice(prevPrice => prevPrice * 1.025);
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <div onClick={handleClick} className="flex flex-row items-center border justify-between px-6 py-7 cursor-pointer">
            <div className="flex flex-row gap-6 items-center">
                <div className="flex flex-col">
                    <img src={image} alt={name} />
                </div>
                <div className="flex flex-col">
                    <h2>{name}</h2>
                    <p>Price: {price.toFixed(2)} Headshot</p>
                </div>
            </div>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default UpgradeCard;