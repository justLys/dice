class DiceRoll {
    constructor(diceType, rollsCount, keepHighRoll) {
        this.diceType = diceType;
        this.rollsCount = rollsCount;
        this.keepHighRoll = keepHighRoll; //True = Highest / False = Lowest
        this.intermediateRolls = [];
        this.rollResult = this.setRollResult();
    }

    setRollResult() {
        for (let i = 0; i < this.rollsCount; i++) {
            this.intermediateRolls.push(Math.floor(Math.random() * this.diceType.maxSides) + 1);
        }

        // Trie le tableau de jets de dés par ordre croissant ou décroissant selon le choix du jet à garder
        if (this.keepHighRoll) {
            this.intermediateRolls.sort(function (a,b) {
                return b - a;
            })
        }
        else {
            this.intermediateRolls.sort(function (a,b) {
                return a - b;
            })
        }

        //Renvoie le premier résultat, donc le plus haut / bas selon la méthode de tri
        return this.intermediateRolls[0];
    }
}