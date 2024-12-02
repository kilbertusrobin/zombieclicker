const ScoreContainer = ({ score, persecond }) => {
    return (
        <div className="score-container h-full w-full flex flex-col items-center justify-center">
            {/* Afficher le score actuel */}
            <h1 className="creepster text-3xl">{score} Headshots !!!</h1>
            {/* Afficher le nombre de points gagnés par seconde */}
            <p>{persecond} par secondes</p>
        </div>
    );
};

export default ScoreContainer;