import { useState, useEffect, useCallback } from "react";
import ValiseVisualContainer from "../components/ValiseVisualContainer";
import ValiseUpgraderContainer from "../components/ValiseUpgraderContainer";
import useDistance from "../hooks/useDistance";

const LayoutValise = () => {
    const [speed, setSpeed] = useState(2);
    const [distance, setDistance] = useState(0); // Distance initiale définie, à ajuster en fonction des besoins

    // Mettre à jour la distance manuellement après chaque achat
    const handleUpgrade = (price, income) => {
        if (distance >= price) {
            setDistance(prevDistance => Math.round((prevDistance - price) * 1000) / 1000);
            setSpeed(prevSpeed => prevSpeed + income);
        }
    };

    // Utiliser le hook useDistance pour mettre à jour la distance
    useDistance(speed, setDistance);

    return (
        <div className="w-full h-full flex">
            <div className="w-1/2 h-full">
                <ValiseVisualContainer speed={speed} distance={distance} />
            </div>
            <div className="w-1/2 h-full bg-red-500">
                <ValiseUpgraderContainer onUpgrade={handleUpgrade} />
            </div>
        </div>
    );
};

export default LayoutValise;