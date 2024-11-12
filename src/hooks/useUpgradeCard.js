import { useState, useEffect } from 'react';

const useUpgradeCard = (initialPrice, initialQuantity, incomeRate, score, setScore, upgradeKey) => {
    // Initialiser la quantité et le prix à partir du local storage ou des valeurs initiales
    const [price, setPrice] = useState(initialPrice);
    const [quantity, setQuantity] = useState(() => {
        const savedQuantity = localStorage.getItem(upgradeKey);
        return savedQuantity ? parseInt(savedQuantity, 10) : initialQuantity;
    });

    const handleClick = () => {
        if (score >= price) {
            setScore(prevScore => prevScore - price);
            setQuantity(prevQuantity => prevQuantity + 1);
            setPrice(prevPrice => Math.round(prevPrice * 1.250));
        }
    };

    // Sauvegarder la quantité dans le local storage à chaque changement
    useEffect(() => {
        localStorage.setItem(upgradeKey, quantity);
    }, [quantity, upgradeKey]);

    const income = quantity * incomeRate;

    return { price, quantity, income, handleClick };
};

export default useUpgradeCard;
