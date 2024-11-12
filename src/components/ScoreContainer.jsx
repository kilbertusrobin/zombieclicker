const ScoreContainer = ({ score }) => {
    return (
        <div className="score-container h-full w-full flex flex-col items-center justify-center">
            <h1 className="creepster">{score} Headshot !!!</h1>
            <p>Salopio va</p>
        </div>
    );
};

export default ScoreContainer;
