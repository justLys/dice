const diceTypes = {
    coin : 2,
    D4 : 4,
    D6 : 6,
    D8 : 8,
    D12 : 12,
    D20 : 20,
    D100 : 100
};

let toggleKeepHighRoll = true;
let displayTutorials= false;

function loadDiceChoiceUI() {
    const diceTypeEntries = Object.entries(diceTypes);
    for (const [name, maxSides] of diceTypeEntries) { //Boucle sur tous les types de dés et crée un bouton pour chacun
        const diceType = new DiceType(name, maxSides);
        const diceDisplay = createDiceChoiceDisplay(diceType);
        diceDisplay.onclick = function() {
            diceTypeSelectedClassManagement(this);
            generateDiceRoll(diceType, parseInt(rollsCountInput.value), toggleKeepHighRoll);
        };
    }
}

function generateDiceRoll(diceType, rollsCount, keepHighRoll) {
    const diceRoll = new DiceRoll(diceType, rollsCount, keepHighRoll);
    //Affiche le résultat final
    const resultDisplay = createResultDiceDisplay(diceRoll);
    resultDisplay.onclick = function () {
        generateDiceRoll(diceType, rollsCount, keepHighRoll);
    };
    //Affiche les jets de dés intermédiaires
    for (let i = 1; i < diceRoll.intermediateRolls.length; i++) {
        createIntermediateRollDisplay(diceRoll.intermediateRolls[i]);
    }
}