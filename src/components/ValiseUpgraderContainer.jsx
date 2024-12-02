import UpgradeValise from "./UpgradeValise";

const ValiseUpgraderContainer = ({ onUpgrade, currentSpeed }) => {
    return (
        <div className="w-full h-full bg-[#6b4db2] flex flex-col">
            <h1 className="text-2xl text-center font-bold text-white mt-10 mb-10">
                Essaye d'atteindre les 60km/h (moteur à explosion)
            </h1>
            <div className="w-full h-auto items-center flex flex-col">
                {/* Composant pour l'amélioration "Petit moteur" */}
                <UpgradeValise
                    title={"Petit moteur"}
                    distancePrice={0.02}
                    income={1}
                    cap={'10'}
                    img={'valise1.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
                {/* Composant pour l'amélioration "Crier 'En avant !'" */}
                <UpgradeValise
                    title={"Crier \"En avant !\" "}
                    distancePrice={0.2}
                    income={2}
                    cap={'30'}
                    img={'EnAvant.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
                {/* Composant pour l'amélioration "Crier 'Plus vite !'" */}
                <UpgradeValise
                    title={"Crier \"Plus vite !\" "}
                    distancePrice={0.5}
                    income={5}
                    cap={'45'}
                    img={'PlusVite.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
                {/* Composant pour l'amélioration "Plus jolie valise" */}
                <UpgradeValise
                    title={"Plus jolie valise"}
                    distancePrice={0.75}
                    income={10}
                    cap={'59.9'}
                    img={'valiseChic.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
                {/* Composant pour l'amélioration "Moteur à explosion" */}
                <UpgradeValise
                    title={"Moteur à explosion"}
                    distancePrice={1}
                    income={0}
                    cap={'win'}
                    img={'valiseMoteur.png'}
                    onUpgrade={onUpgrade}
                    currentSpeed={currentSpeed}
                />
            </div>
        </div>
    );
};

export default ValiseUpgraderContainer;