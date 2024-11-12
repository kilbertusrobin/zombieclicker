// useUpgradeCard.js
import { useState } from 'react';

const useUpgradeCard = (initialPrice, initialQuantity, incomeRate, score, setScore) => {
    const [price, setPrice] = useState(initialPrice);
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleClick = () => {
        if (score >= price) {
            setScore(prevScore => prevScore - price);
            setQuantity(prevQuantity => prevQuantity + 1);
            setPrice(prevPrice => Math.round(prevPrice * 1.250));
        }
    };

    // Calcul du revenu pour cette carte en fonction de sa quantité
    const income = quantity * incomeRate;

    return { price, quantity, income, handleClick };
};

export default useUpgradeCard;
