import { useState } from 'react';

const useUpgradeCard = (initialPrice, initialQuantity) => {
    const [price, setPrice] = useState(initialPrice);
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleClick = () => {
        setPrice(prevPrice => prevPrice * 1.025);
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return { price, quantity, handleClick };
};

export default useUpgradeCard;