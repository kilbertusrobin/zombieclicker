const ValiseVisualContainer = () => {
    return (
        <div className="w-full h-full relative">
            

            <img src="./assets/bg-valise.gif" className="w-full h-full object-cover absolute mb-40 absolute" alt="valise" />
            <img src="./assets/road40kmh.gif" className="w-full h-1/2 object-cover absolute bottom-0" alt="road" />
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
