import { useState, useEffect } from 'react';

const useUpgradeCard = (initialPrice, initialQuantity, incomeRate, score, setScore, upgradeKey) => {
    const [price, setPrice] = useState(() => {
        // Charger le prix depuis le localStorage, sinon utiliser initialPrice
        const savedPrice = localStorage.getItem(`${upgradeKey}-price`);
        return savedPrice ? parseFloat(savedPrice) : initialPrice;
    });
    
    const [quantity, setQuantity] = useState(() => {
        const savedQuantity = localStorage.getItem(upgradeKey);
        return savedQuantity ? parseInt(savedQuantity, 10) : initialQuantity;
    });

    const handleClick = () => {
        if (score >= price) {
            setScore(prevScore => prevScore - price);
            setQuantity(prevQuantity => prevQuantity + 1);
            // Calculer le nouveau prix en multipliant par 1.25
            const newPrice = Math.round(price * 1.25);
            setPrice(newPrice);
        }
    };

    // Sauvegarder la quantité dans le localStorage à chaque changement
    useEffect(() => {
        localStorage.setItem(upgradeKey, quantity);
    }, [quantity, upgradeKey]);

    // Sauvegarder le prix dans le localStorage à chaque changement
    useEffect(() => {
        localStorage.setItem(`${upgradeKey}-price`, price);
    }, [price, upgradeKey]);

    const income = quantity * incomeRate;

    return { price, quantity, income, handleClick };
};

export default useUpgradeCard;
