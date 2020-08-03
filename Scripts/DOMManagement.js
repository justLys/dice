const diceChoiceContainer = document.getElementById("diceChoiceContainer");
const diceResultContainer = document.getElementById("diceResultContainer");
const diceResult = document.getElementById("diceResult");
const diceNameContainer = document.getElementById("displayDiceTypeForResult");
const intermediateRollsContainer = document.getElementById("intermediateRollsContainer");
const parametersForm = document.getElementById("parametersForm");
const rollsCountInput = document.getElementById("rollsCountInput");
const toggleInputHighRoll = document.getElementById("toggleInputHighRoll");
const toggleInputLowRoll = document.getElementById("toggleInputLowRoll");

// GLOBAL
function createDiceDisplay(container, numberDisplayed) {
    const diceButton = document.createElement("div");
    const diceNumber = document.createElement("span");
    diceButton.classList.add("diceDisplay");
    diceNumber.innerHTML = numberDisplayed;
    diceButton.appendChild(diceNumber);
    container.appendChild(diceButton);
    return diceButton;
}

function makeThisSelected(e) {
    e.classList.add("selected");
}

function makeThisUnselected(e) {
    e.classList.remove("selected");
}

//  SPECIFIC DISPLAYS
function createDiceChoiceDisplay(diceType) {
    return createDiceDisplay(diceChoiceContainer, diceType.maxSides);
}

function createResultDiceDisplay(diceRoll) {
    showResultDisplay();
    wipeResultDisplay();
    wipeIntermediateRollsDisplay();
    displayDiceTypeForResult(diceRoll.diceType.name);
    return createDiceDisplay(diceResult, diceRoll.rollResult);
}

function createIntermediateRollDisplay(rollResult) {
    return createDiceDisplay(intermediateRollsContainer, rollResult);
}

function diceTypeSelectedClassManagement(e) {
    const children = diceChoiceContainer.childNodes;
    for (let i = 0 ; i < children.length ; i++) {
        if (children[i].classList.contains("diceDisplay")) {
            makeThisUnselected(children[i]);
        }
    }
    makeThisSelected(e);
}

// RESULT
function wipeResultDisplay() {
    while (diceResult.firstChild) {
        diceResult.removeChild(diceResult.firstChild);
    }
}

function showResultDisplay() {
    if (window.getComputedStyle(diceResultContainer).display === "none") {
        diceResultContainer.style.display = "flex";
    }
}

function hideResultDisplay() {
    if (window.getComputedStyle(diceResultContainer).display !== "none") {
        diceResultContainer.style.display = "none";
    }
}

function displayDiceTypeForResult(diceName) {
    diceNameContainer.innerText = diceName;
}

function wipeIntermediateRollsDisplay() {
    while (intermediateRollsContainer.firstChild) {
        intermediateRollsContainer.removeChild(intermediateRollsContainer.firstChild);
    }
}

// PARAMETERS FORM
function showParametersForm() {
    if (window.getComputedStyle(parametersForm).display === "none") {
        parametersForm.style.display = "flex";
    }
}

function hideParametersForm() {
    if (window.getComputedStyle(parametersForm).display !== "none") {
        parametersForm.style.display = "none";
    }
}

function updateInputNumberValue(valueChange) {
    const currentValue = parseInt(rollsCountInput.value);
    let newValue = currentValue + valueChange;
    if (newValue < 1) {
        newValue = 1;
    }
    else if (newValue > 99) {
        newValue = 99;
    }
    rollsCountInput.value = newValue;
}

function makeLowestRollSelected() {
    toggleKeepHighRoll = false;
    makeThisSelected(toggleInputLowRoll);
    makeThisUnselected(toggleInputHighRoll);
}

function makeHighestRollSelected() {
    toggleKeepHighRoll = true;
    makeThisSelected(toggleInputHighRoll);
    makeThisUnselected(toggleInputLowRoll);
}

//OTHER
function toggleTutorials() {
    if (displayTutorials) {
        hideAllTutorials();
        displayTutorials = false;
    }
    else {
        showAllTutorials();
        displayTutorials = true;
    }
}

function hideAllTutorials() {
    const tutorialTexts = document.getElementsByClassName("tutorialText");
    for (let i = 0; i < tutorialTexts.length; i++) {
        tutorialTexts[i].classList.add("hiddenTutorial");
    }
}

function showAllTutorials() {
    const tutorialTexts = document.getElementsByClassName("tutorialText");
    for (let i = 0; i < tutorialTexts.length; i++) {
        tutorialTexts[i].classList.remove("hiddenTutorial");
    }
}