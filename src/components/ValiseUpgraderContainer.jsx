import UpgradeValise from "./UpgradeValise";

const ValiseUpgraderContainer = () => {
    return (
        <div className="w-full h-full bg-[#6b4db2] flex flex-col">
            <h1 className="text-2xl text-center font-bold text-white mt-10 mb-10">Essaye d'atteindre les 60km/h (moteur à explosion)</h1>
            <div className="w-full h-auto items-center flex flex-col">
                <UpgradeValise title={"Petit moteur"} price={5} income={0.2} cap={'10'} img={'bonk.png'}/>
                <UpgradeValise title={"Crier \"En avant !\" "} price={5} income={0.2} cap={'30'} img={'bonk.png'} />
                <UpgradeValise title={"Crier \"Plus vite !\" "} price={5} income={0.2} cap={'45'} img={'bonk.png'} />
                <UpgradeValise title={"Plus jolie valise"} price={5} income={0.2} cap={'59,9'} img={'bonk.png'} />
                <UpgradeValise title={"Moteur à explosion"} price={5} income={0.2} cap={'win'} img={'pew.png'} />
            </div>
        </div>
    );
};

export default ValiseUpgraderContainer;
