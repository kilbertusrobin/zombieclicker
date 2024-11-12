import React from 'react';
import UpgradeCard from "./UpgradeCard";

const AllUpgradeCards = ({ score, setScore, updateUpgradeQuantity }) => {
    return (
        <>
            <UpgradeCard name="Brute" image="/assets/batte.svg" initialPrice={50} initialQuantity={0} incomeRate={1} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(0, quantity)} upgradeKey="upgrade_0" />
            <UpgradeCard name="Pistolero" image="/assets/pistolet.svg" initialPrice={500} initialQuantity={0} incomeRate={5} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(1, quantity)} upgradeKey="upgrade_1" />
            <UpgradeCard name="Soldat" image="/assets/fusil.svg" initialPrice={2500} initialQuantity={0} incomeRate={25} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(2, quantity)} upgradeKey="upgrade_2" />
            <UpgradeCard name="Commando" image="/assets/commando.svg" initialPrice={5000} initialQuantity={0} incomeRate={50} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(3, quantity)} upgradeKey="upgrade_3" />
            <UpgradeCard name="Blindé" image="/assets/tank.svg" initialPrice={10000} initialQuantity={0} incomeRate={125} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(4, quantity)} upgradeKey="upgrade_4" />
            <UpgradeCard name="Bombardier" image="/assets/bombardier.svg" initialPrice={50000} initialQuantity={0} incomeRate={250} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(5, quantity)} upgradeKey="upgrade_5" />
            <UpgradeCard name="Annihilateur" image="/assets/annihilateur.svg" initialPrice={100000} initialQuantity={0} incomeRate={500} score={score} setScore={setScore} updateQuantity={(quantity) => updateUpgradeQuantity(6, quantity)} upgradeKey="upgrade_6" />
        </>
    );
};

export default AllUpgradeCards;
