import React from 'react';
import UpgradeCard from "./UpgradeCard";

const AllUpgradeCards = ({ score, setScore }) => {
    return (
        <>
            <UpgradeCard name="Brute" image="/assets/batte.svg" initialPrice={30} initialQuantity={0} score={score} setScore={setScore} />
            <UpgradeCard name="Pistolero" image="/assets/pistolet.svg" initialPrice={250} initialQuantity={0} score={score} setScore={setScore} />
            <UpgradeCard name="Soldat" image="/assets/fusil.svg" initialPrice={1000} initialQuantity={0} score={score} setScore={setScore} />
            <UpgradeCard name="Commando" image="/assets/commando.svg" initialPrice={3000} initialQuantity={0} score={score} setScore={setScore} />
            <UpgradeCard name="Blindé" image="/assets/tank.svg" initialPrice={10000} initialQuantity={0} score={score} setScore={setScore} />
            <UpgradeCard name="Bombardier" image="/assets/bombardier.svg" initialPrice={50000} initialQuantity={0} score={score} setScore={setScore} />
            <UpgradeCard name="Annihilateur" image="/assets/annihilateur.svg" initialPrice={100000} initialQuantity={0} score={score} setScore={setScore} />
        </>
    );
};

export default AllUpgradeCards;