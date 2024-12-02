import { useEffect } from "react";

const useDistance = (speed, updateDistance) => {
    useEffect(() => {
        // Intervalle pour mettre à jour la distance en fonction de la vitesse toutes les secondes
        const interval = setInterval(() => {
            updateDistance(prevDistance => Math.round((prevDistance + (speed / 3600)) * 1000) / 1000);
        }, 1000);

        // Nettoyer l'intervalle lorsque le composant est démonté ou lorsque la vitesse change
        return () => clearInterval(interval);
    }, [speed, updateDistance]);
};

export default useDistance;