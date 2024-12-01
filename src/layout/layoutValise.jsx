import { useState, useEffect, useCallback } from "react";
import ValiseVisualContainer from "../components/ValiseVisualContainer";
import ValiseUpgraderContainer from "../components/ValiseUpgraderContainer";
import useDistance from "../hooks/useDistance";

const LayoutValise = () => {
    const [speed, setSpeed] = useState(() => parseFloat(localStorage.getItem('speed')) || 2);
    const [distance, setDistance] = useState(() => parseFloat(localStorage.getItem('distance')) || 0);
    const [purchaseCount, setPurchaseCount] = useState(() => parseInt(localStorage.getItem('purchaseCount')) || 0);

    const saveToLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    };

    useEffect(() => {
        saveToLocalStorage('speed', speed);
    }, [speed]);

    useEffect(() => {
        saveToLocalStorage('distance', distance);
    }, [distance]);

    useEffect(() => {
        saveToLocalStorage('purchaseCount', purchaseCount);
    }, [purchaseCount]);

    const handleUpgrade = (price, income, cap) => {
        if (distance >= price && (cap === 'win' || speed < parseFloat(cap))) {
            setDistance(prevDistance => Math.round((prevDistance - price) * 1000) / 1000);
            setSpeed(prevSpeed => prevSpeed + income);
            setPurchaseCount(prevCount => prevCount + 1);
        }
    };

    useDistance(speed, setDistance);

    return (
        <div className="w-full h-full flex">
            <div className="w-1/2 h-full">
                <ValiseVisualContainer speed={speed} distance={distance} />
            </div>
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
