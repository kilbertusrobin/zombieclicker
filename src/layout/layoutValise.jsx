import { useState, useEffect } from "react";
import ValiseVisualContainer from "../components/ValiseVisualContainer";
import ValiseUpgraderContainer from "../components/ValiseUpgraderContainer";
import useDistance from "../hooks/useDistance";

const LayoutValise = () => {
    const [speed, setSpeed] = useState(2);
    const [distance, setDistance] = useState(0); // Distance initiale définie, à ajuster en fonction des besoins
    const distanceFromHook = useDistance(speed);

    // Mettre à jour la distance manuellement après chaque achat
    const handleUpgrade = (price, income) => {
        if (distance >= price) {
            setSpeed(prevSpeed => {
                const newSpeed = prevSpeed + income;
                return newSpeed;
            });
            setDistance(prevDistance => {
                const newDistance = prevDistance - price;
                return newDistance;
            });
        }
    };

    // Met à jour la distance lorsque la distance calculée par le hook change
    useEffect(() => {
        setDistance(prevDistance => Math.max(prevDistance, distanceFromHook));
    }, [distanceFromHook]);

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
