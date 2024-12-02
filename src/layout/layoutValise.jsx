import { useState, useEffect, useCallback } from "react";
import ValiseVisualContainer from "../components/ValiseVisualContainer";
import ValiseUpgraderContainer from "../components/ValiseUpgraderContainer";
import useDistance from "../hooks/useDistance";

const LayoutValise = () => {
    // État pour la vitesse, la distance et le nombre d'achats, initialisé à partir du localStorage
    const [speed, setSpeed] = useState(() => parseFloat(localStorage.getItem('speed')) || 2);
    const [distance, setDistance] = useState(() => parseFloat(localStorage.getItem('distance')) || 0);
    const [purchaseCount, setPurchaseCount] = useState(() => parseInt(localStorage.getItem('purchaseCount')) || 0);

    // Fonction pour sauvegarder les valeurs dans le localStorage
    const saveToLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    };

    // Sauvegarder la vitesse dans le localStorage lorsque la vitesse change
    useEffect(() => {
        saveToLocalStorage('speed', speed);
    }, [speed]);

    // Sauvegarder la distance dans le localStorage lorsque la distance change
    useEffect(() => {
        saveToLocalStorage('distance', distance);
    }, [distance]);

    // Sauvegarder le nombre d'achats dans le localStorage lorsque le nombre d'achats change
    useEffect(() => {
        saveToLocalStorage('purchaseCount', purchaseCount);
    }, [purchaseCount]);

    // Fonction pour gérer l'amélioration, mise à jour de la distance, de la vitesse et du nombre d'achats
    const handleUpgrade = (price, income, cap) => {
        if (distance >= price && (cap === 'win' || speed < parseFloat(cap))) {
            setDistance(prevDistance => Math.round((prevDistance - price) * 1000) / 1000);
            setSpeed(prevSpeed => prevSpeed + income);
            setPurchaseCount(prevCount => prevCount + 1);
        }
    };

    // Utilisation du hook personnalisé pour mettre à jour la distance en fonction de la vitesse
    useDistance(speed, setDistance);

    return (
        <div className="w-full h-full flex">
            {/* Conteneur visuel de la valise */}
            <div className="w-1/2 h-full">
                <ValiseVisualContainer speed={speed} distance={distance} />
            </div>
            {/* Conteneur des améliorations de la valise */}
            <div className="w-1/2 h-full bg-red-500">
                <ValiseUpgraderContainer 
                    onUpgrade={handleUpgrade} 
                    currentSpeed={speed} 
                    purchaseCount={purchaseCount} 
                />
            </div>
        </div>
    );
};

export default LayoutValise;