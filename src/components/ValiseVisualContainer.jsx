const ValiseVisualContainer = ({ speed, distance }) => {
    // Déterminer le gif de la route en fonction de la vitesse
    let gifKm = 0;
    if (speed < 20) {
        gifKm = 1; 
    } else if (speed > 20 && speed < 30) {
        gifKm = 20;
    } else if (speed > 30 && speed < 40) {
        gifKm = 30;
    } else {
        gifKm = 40;
    }

    return (
        <div className="w-full h-full relative">
            {/* Afficher la vitesse actuelle */}
            <h1 className="text-4xl text-center font-bold text-black absolute top-10 w-full z-30">
                VITESSE ACTUELLE : {speed}km/h
            </h1>
            {/* Afficher la distance parcourue */}
            <h1 className="text-3xl text-center font-bold text-black absolute top-20 w-full z-30">
                Distance parcourue : {distance}km
            </h1>
            
            {/* Image de fond */}
            <img src="./assets/bg-valise.gif" className="w-full h-full object-cover absolute mb-40" alt="valise" />
            {/* Image de la route en fonction de la vitesse */}
            <img src={`./assets/road${gifKm}kmh.gif`} className="w-full h-1/2 object-cover absolute bottom-0" alt="road" />
            {/* Image de la valise mobile */}
            <img
                src="./assets/valisemobile.png"
                className="h-1/3 w-auto absolute bottom-5 left-0 right-0 m-auto z-10"
                style={{ animation: 'roulerAleatoire 3s infinite ease-in-out' }}
                alt="valise"
            />
        </div>
    );
};

export default ValiseVisualContainer;