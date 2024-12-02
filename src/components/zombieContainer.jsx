const ZombieContainer = () => {
    return (
        <>
            {/* Conteneur pour afficher le zombie */}
            <div className="zombie-container h-full w-full flex items-center justify-center">
                {/* Image du zombie */}
                <img src="./assets/zombie.png" alt="Zombie" className="w-2/3 h-auto" />
            </div>
        </>
    );
};

export default ZombieContainer;