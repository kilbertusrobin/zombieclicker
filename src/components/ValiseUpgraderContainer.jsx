import UpgradeValise from "./UpgradeValise";

const ValiseUpgraderContainer = ({ onUpgrade, currentSpeed }) => {
    return (
        <div className="w-full h-full bg-[#6b4db2] flex flex-col">
            <h1 className="text-2xl text-center font-bold text-white mt-10 mb-10">
                Essaye d'atteindre les 60km/h (moteur à explosion)
            </h1>
            <div className="w-full h-auto items-center flex flex-col">
                <UpgradeValise
                    title={"Petit moteur"}
                    distancePrice={0.02}
                    income={1}
                    cap={'10'}
                    img={'bonk.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
                <UpgradeValise
                    title={"Crier \"En avant !\" "}
                    distancePrice={0.5}
                    income={2}
                    cap={'30'}
                    img={'bonk.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
                <UpgradeValise
                    title={"Crier \"Plus vite !\" "}
                    distancePrice={5}
                    income={0.2}
                    cap={'45'}
                    img={'bonk.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
                <UpgradeValise
                    title={"Plus jolie valise"}
                    distancePrice={5}
                    income={0.2}
                    cap={'59.9'}
                    img={'bonk.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
                <UpgradeValise
                    title={"Moteur à explosion"}
                    distancePrice={5}
                    income={0.2}
                    cap={'win'}
                    img={'pew.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
            </div>
        </div>
    );
};

export default ValiseUpgraderContainer;
