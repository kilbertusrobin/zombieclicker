import { useEffect } from "react";

const useDistance = (speed, updateDistance) => {
    useEffect(() => {
        const interval = setInterval(() => {
            updateDistance(prevDistance => Math.round((prevDistance + (speed / 3600)) * 1000) / 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [speed, updateDistance]);
};

export default useDistance;