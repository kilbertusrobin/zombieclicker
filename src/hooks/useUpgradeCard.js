import { useState } from 'react';

const useUpgradeCard = (initialPrice, initialQuantity, score, setScore) => {
    const [price, setPrice] = useState(initialPrice);
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleClick = () => {
        if (score >= price) {
            setPrice(prevPrice => Math.round(prevPrice * 1.025));
            setQuantity(prevQuantity => prevQuantity + 1);
            setScore(prevScore => prevScore - price);
        }
    };

    return { price, quantity, handleClick };
};

export default useUpgradeCard;