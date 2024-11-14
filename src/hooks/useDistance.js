import { useState, useEffect } from "react";

const useDistance = (speed) => {
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDistance(prevDistance => Math.round((prevDistance + (speed / 3600)) * 1000) / 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [speed]);

    return distance;
};


export default useDistance;
