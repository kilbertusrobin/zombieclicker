const UpgradeCard = ({ name, image, price, quantity }) => {
    return (
        <>
            <div className="flex flex-row items-center border justify-between px-6 py-7">
                <div className="flex flex-row gap-6 items-center">
                <div className="flex flex-col">
                <img src={image} alt={name} />
                </div>
                <div className="flex flex-col">
                <h2>{name}</h2>
                <p>Price: {price} Headshot</p>
                </div>
                </div>
                <p>Quantity: {quantity}</p>
            </div>
        </>
    );
};

export default UpgradeCard;