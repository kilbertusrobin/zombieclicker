import { useState, useEffect } from 'react';

const useUpgradeCard = (initialPrice, initialQuantity, incomeRate, score, setScore, upgradeKey) => {
    // État pour le prix de l'amélioration, initialisé à partir du localStorage ou de la valeur initiale
    const [price, setPrice] = useState(() => {
        const savedPrice = localStorage.getItem(`${upgradeKey}-price`);
        return savedPrice ? parseFloat(savedPrice) : initialPrice;
    });
    
    // État pour la quantité d'améliorations, initialisé à partir du localStorage ou de la valeur initiale
    const [quantity, setQuantity] = useState(() => {
        const savedQuantity = localStorage.getItem(upgradeKey);
        return savedQuantity ? parseInt(savedQuantity, 10) : initialQuantity;
    });

    // Fonction pour gérer le clic sur l'amélioration
    const handleClick = () => {
        if (score >= price) {
            // Déduire le prix du score et augmenter la quantité
            setScore(prevScore => prevScore - price);
            setQuantity(prevQuantity => prevQuantity + 1);
            
            // Augmenter le prix pour la prochaine amélioration
            const newPrice = Math.round(price * 1.25);
            setPrice(newPrice);
        }
    };

    // Sauvegarder la quantité dans le localStorage lorsque la quantité change
    useEffect(() => {
        localStorage.setItem(upgradeKey, quantity);
    }, [quantity, upgradeKey]);

    // Sauvegarder le prix dans le localStorage lorsque le prix change
    useEffect(() => {
        localStorage.setItem(`${upgradeKey}-price`, price);
    }, [price, upgradeKey]);

    // Calculer le revenu basé sur la quantité et le taux de revenu
    const income = quantity * incomeRate;

    return { price, quantity, income, handleClick };
};

export default useUpgradeCard;