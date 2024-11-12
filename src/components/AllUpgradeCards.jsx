// AllUpgradeCards.js
import React from 'react';
import UpgradeCard from "./UpgradeCard";

const AllUpgradeCards = ({ score, setScore, updateUpgradeQuantity }) => {
    return (
        <>
            <UpgradeCard name="Brute" image="/assets/batte.svg" initialPrice={30} initialQuantity={0} incomeRate={1} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(0, quantity)} />
            <UpgradeCard name="Pistolero" image="/assets/pistolet.svg" initialPrice={250} initialQuantity={0} incomeRate={10} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(1, quantity)} />
            <UpgradeCard name="Soldat" image="/assets/fusil.svg" initialPrice={1000} initialQuantity={0} incomeRate={50} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(2, quantity)} />
            <UpgradeCard name="Commando" image="/assets/commando.svg" initialPrice={3000} initialQuantity={0} incomeRate={100} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(3, quantity)} />
            <UpgradeCard name="Blindé" image="/assets/tank.svg" initialPrice={10000} initialQuantity={0} incomeRate={250} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(4, quantity)} />
            <UpgradeCard name="Bombardier" image="/assets/bombardier.svg" initialPrice={50000} initialQuantity={0} incomeRate={500} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(5, quantity)} />
            <UpgradeCard name="Annihilateur" image="/assets/annihilateur.svg" initialPrice={100000} initialQuantity={0} incomeRate={1000} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(6, quantity)} />
        </>
    );
};

export default AllUpgradeCards;
