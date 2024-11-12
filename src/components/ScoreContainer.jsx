const ScoreContainer = ({ score, persecond }) => {
    return (
        <div className="score-container h-full w-full flex flex-col items-center justify-center">
            <h1 className="creepster text-3xl">{score} Headshots !!!</h1>
            <p>{persecond} par secondes</p>
        </div>
    );
};

export default ScoreContainer;
