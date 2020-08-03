<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="Ressources/CSS/style.css" xmlns="http://www.w3.org/1999/html">
</head>

<body onload="loadDiceChoiceUI()">
<div class="tutorialToggleButton" onclick="toggleTutorials()"><p>?</p></div>
    <div class="bigRow">
        <p class="tutorialText hiddenTutorial">Left click on a dice to roll it.</p>
        <div class="diceDisplayContainer" id="diceChoiceContainer"></div>
    </div>

    <div class="bigRow">
        <div class="parametersFormContainer">
            <div class="parametersFormArea">
                <button onclick="showParametersForm(); makeThisSelected(this)">Add parameters</button>
                <div class="parametersForm" id="parametersForm" style="display: none">
                    <p>Force Luck</p>
                    <p class="tutorialText hiddenTutorial">Choose how many dices are rolled for one result.</p>
                    <div class="formSmallNumberInputContainer">
                        <div class="formSmallNumberInputSideButton formSmallNumberInputLeftButton" onclick="updateInputNumberValue(-1)">-</div>
                        <input id="rollsCountInput" class="formSmallNumberInput" type="number" min="1" max="99" value="1" onfocusout="updateInputNumberValue(0)" />
                        <div class="formSmallNumberInputSideButton formSmallNumberInputRightButton" onclick="updateInputNumberValue(1)">+</div>
                    </div>
                    <p class="tutorialText hiddenTutorial">Choose if you want to keep the highest or lowest roll of all dices.</p>
                    <div class="formToggleInputContainer">
                        <div class="formToggleInput formToggleInputLeftSideButton" id="toggleInputLowRoll" onclick="makeLowestRollSelected()">Lowest</div>
                        <div class="formToggleInput formToggleInputRightSideButton selected" id="toggleInputHighRoll" onclick="makeHighestRollSelected()">Highest</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bigRow" style="display: none" id="diceResultContainer">
        <p>Result for your roll with a <span id="displayDiceTypeForResult"></span></p>
        <div class="diceDisplayContainer bigDisplay" id="diceResult"></div>
        <div class="diceDisplayContainer intermediateRollsContainer" id="intermediateRollsContainer"></div>
        <p class="tutorialText hiddenTutorial">Left click on the result to roll again<br> with the same parameters.</p>
    </div>

</body>
<script src="Scripts/global.js"></script>
<script src="Scripts/DOMManagement.js"></script>
<!--    CLASSES-->
<script src="Scripts/Classes/DiceRoll.js"></script>
<script src="Scripts/Classes/DiceType.js"></script>
<?php
